import classNames from 'classnames/bind';
import Link from 'next/link';
import Button from '../../src/components/Button';
import InputField from '../../src/components/Input';
import FormAuthLayout from '../../src/layouts/FormAuthLayout';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
  return (
    <FormAuthLayout>
      <div className={cx('form', 'login')}>
        <div className={cx('form__heading')}>SOIOT SYSTEM</div>
        <div className={cx('form__error')}></div>
        <InputField type="text" placeholder="Username" required />
        <InputField type="password" placeholder="Password" required />
        <div className={cx('form__actions')}>
          <Button primary>LOGIN</Button>
          <Link href="/register">or create new account</Link>
        </div>
      </div>
    </FormAuthLayout>
  );
}

export default LoginPage;
