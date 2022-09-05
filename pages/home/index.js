import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import deviceApi from '../../src/api/deviceApi';
import FormCreateDevice from './components/FormCreateDevice';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function HomePage() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState();
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);
        const res = await deviceApi.getAll();
        setDevices(res.data.data.devices);
        setLoading(false);
      })();
    } catch (error) {
      console.log('error: ', error);
      setLoading(false);
    }
  }, []);

  // const handleRefresh = (value) => {
  //   setRefresh(value);
  // };

  return (
    <>
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
            </tbody>
          </table>
        </div>
      </div>
      <div className={cx('section__2')}>
        <div className={cx('section__2-item', 'section')}>{/* <Chart /> */}</div>
        <div className={cx('section__2-item', 'section')}>
          <div className={cx('wrapper')}>
            <FormCreateDevice />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
