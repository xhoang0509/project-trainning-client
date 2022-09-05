import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import deviceApi from '../../src/api/deviceApi';
import Protect from '../../src/components/Protect';
import Chart from './components/Chart';
import FormCreateDevice from './components/FormCreateDevice';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function HomePage() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState();
  const [totalDevice, setTotalDevice] = useState(0);
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);
        const res = await deviceApi.getAll();
        setDevices(res.data.data.devices);
        if (res.data.data.devices.length > 0) {
          const total = res.data.data.devices.reduce((prevValue, currValue) => {
            return (prevValue += parseInt(currValue.power));
          }, 0);
          setTotalDevice(total);
        }
        setLoading(false);
      })();
    } catch (error) {
      console.log('error: ', error);
      setLoading(false);
    }
  }, [refresh]);

  const handleFormSubmit = () => {
    setRefresh(!refresh);
  };

  return (
    <Protect>
      <div className={cx('section', 'section-dashboard-mobile')}>
        <div className={cx('wrapper-table')}>
          {loading && <h3>Loading...</h3>}
          <table className={cx('table', 'table-dashboard')}>
            <thead>
              <tr>
                <th align="start">Devices</th>
                <th align="end">MAC Address</th>
                <th align="end">IP</th>
                <th align="end">Created Date</th>
                <th align="end">Power Consumption(Kw/H)</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                devices &&
                devices.map((item) => {
                  const createdAtFormat = item.createdAt.split('T')[0];
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td align="end">{item.macAddress}</td>
                      <td align="end">{item.IP}</td>
                      <td align="end">{createdAtFormat}</td>
                      <td align="end">{item.power}</td>
                    </tr>
                  );
                })}
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td align="end" colSpan={4}>
                  {totalDevice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={cx('section__2')}>
        <div className={cx('section__2-item', 'section')}>
          <Chart devices={devices} />
        </div>
        <div className={cx('section__2-item', 'section')}>
          <div className={cx('wrapper')}>
            <FormCreateDevice
              onFormSubmit={handleFormSubmit}
              loading={loading}
              setLoading={setLoading}
            />
          </div>
        </div>
      </div>
    </Protect>
  );
}

export default HomePage;
