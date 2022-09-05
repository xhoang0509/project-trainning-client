import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '../../src/components/Button';
import InputField from '../../src/components/Input';
import MainLayout from '../../src/layouts/MainLayout';
import styles from './styles.module.scss';
import logApi from '../../src/api/logApi';

const cx = classNames.bind(styles);

function LogsPage() {
  const [loading, setLoading] = useState()
  const [logs, setLogs] = useState([])

  useEffect(() => {
    try {
      (async () => {
        setLoading(true)
        const res = await logApi.getAll()
        setLogs(res.data.data.logs)
        setLoading(false)
      })()
    } catch (error) {
      console.log('Error: ', error);
      setLoading(false)
    }
  }, [])

  return (
    <MainLayout>
      <div className={cx('action__heading')}>
        <div>Action Logs</div>
        <div className={cx('search')}>
          <InputField type="search" placeholder="Name" className={cx('search__input')} />
          <Button primary>Search</Button>
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('wrapper-table')}>
          <table className={cx('table', 'table-logs')}>
            <thead>
              <tr>
                <th align="start">Devices ID #</th>
                <th align="end">Name</th>
                <th align="end">Action</th>
                <th align="end">Date</th>
              </tr>
            </thead>
            <tbody>
              {
                logs && logs.map(item => (
                  <tr key={item.id}>
                    <td>{item.deviceId}</td>
                    <td align="end">{item.name}</td>
                    <td align="end">{item.action}</td>
                    <td align="end">{item.createdAt}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div></div>
        </div>
      </div>
      <div className={cx('table-page')}>Tổng số 10 / 20</div>
      <div className={cx('wrapper-pagination')}>
        <div className={cx('pagination')}></div>
      </div>
    </MainLayout>
  );
}

export default LogsPage;
