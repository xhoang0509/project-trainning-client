import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import logApi from '../../src/api/logApi';
import Protect from '../../src/components/Protect';
import MainLayout from '../../src/layouts/MainLayout';
import Pagination from './components/Pagination';
import SearchLogs from './components/Search';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function LogsPage() {
  const [loading, setLoading] = useState();
  const [logs, setLogs] = useState([]);
  const [res, setRes] = useState({
    page: 1,
    totalPage: 1,
    total: 0,
  });
  const [params, setParams] = useState({
    q: '',
    page: 1,
  });

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);
        const res = await logApi.getAll(params);
        setLogs(res.data.data.logs);
        setRes(res.data);
        setLoading(false);
      })();
    } catch (error) {
      console.log('Error: ', error);
      setLoading(false);
    }
  }, [params]);

  const handleChangePage = (value) => {
    setParams({
      ...params,
      page: value.page,
    });
    setRes({ ...res, page: value.page });
  };

  const handleSearchSubmit = (value) => {
    setParams({
      ...params,
      q: value,
    });
  };

  return (
    <Protect>
      <MainLayout>
        <div className={cx('action__heading')}>
          <div>Action Logs</div>
          <SearchLogs onSearchSubmit={handleSearchSubmit} />
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
                {logs &&
                  logs.map((item) => (
                    <tr key={item.id}>
                      <td>{item.deviceId}</td>
                      <td align="end">{item.name}</td>
                      <td align="end">{item.action}</td>
                      <td align="end">{item.createdAt}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={cx('table-page')}>
          Tổng số {res.total} / {res.totalLogs}
        </div>
        <Pagination totalPage={res.totalPage} page={params.page} onChangePage={handleChangePage} />
      </MainLayout>
    </Protect>
  );
}

export default LogsPage;
