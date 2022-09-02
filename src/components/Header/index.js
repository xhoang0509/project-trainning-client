import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <FontAwesomeIcon icon={faCircleUser} className={cx('header__icon')} />
      <span className={cx('header__name')}>Welcome John</span>
    </header>
  );
}

export default Header;
