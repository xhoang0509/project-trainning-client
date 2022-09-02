import classNames from 'classnames/bind';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);
function MainLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className={cx('main')}>
        <Header />
        <div className={cx('container')}>
          <div className={cx('content')}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
