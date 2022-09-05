import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Header() {
  const user = useSelector((state) => state.user);

  return (
    <header className={cx('header')}>
      <FontAwesomeIcon icon={faCircleUser} className={cx('header__icon')} />
      <span className={cx('header__name')}>{user.name}</span>
    </header>
  );
}

export default Header;
