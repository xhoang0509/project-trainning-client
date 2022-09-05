import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRightFromBracket,
  faDesktop,
  faGauge,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { logout } from '../../redux/userSlice';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

const list = [
  {
    name: 'Dashboard',
    icon: faGauge,
    link: '/',
  },
  {
    name: 'Logs',
    icon: faClock,
    link: '/logs',
  },
  {
    name: 'Settings',
    icon: faGear,
    link: '#',
    disable: true,
  },
  {
    name: 'Logout',
    icon: faArrowRightFromBracket,
    link: '/login',
  },
];

function Sidebar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pathname } = router;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={cx('sidebar')}>
      <div className={cx('sidebar__heading')}>
        <FontAwesomeIcon icon={faDesktop} className={cx('heading__icon')} />
        <span>Device Manager</span>
      </div>
      <ul className={cx('sidebar__list')}>
        {list.map((item, index) => (
          <div key={index} onClick={item.name === 'Logout' ? handleLogout : null}>
            <Link href={item.link}>
              <li
                className={cx(
                  'sidebar__item',
                  item.disable ? 'disable' : item.link === pathname ? 'active' : ''
                )}
              >
                <FontAwesomeIcon icon={item.icon} className={cx('sidebar__icon')} />
                <span>{item.name}</span>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
