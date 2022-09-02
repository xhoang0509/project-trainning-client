import classNames from 'classnames/bind';
import Button from '../../src/components/Button';
import InputField from '../../src/components/Input';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <>
      <div className={cx('section', 'section-dashboard-mobile')}>
        <div className={cx('wrapper-table')}>
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
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div className={cx('section__2')}>
        <div className={cx('section__2-item', 'section')}>
          <canvas id="myChart"></canvas>
        </div>
        <div className={cx('section__2-item', 'section')}>
          <div className={cx('wrapper')}>
            <form className="form__device">
              <InputField type="text" placeholder="Name" required />
              <InputField type="text" placeholder="IP" required />
              <InputField type="number" placeholder="Power" min="0" step="1" required />
              <Button primary>ADD DEVICE</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
