import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';
import userApi from '../../src/api/userApi';
import Button from '../../src/components/Button';
import InputField from '../../src/components/Input';
import FormAuthLayout from '../../src/layouts/FormAuthLayout';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

function LoginPage() {
  const router = useRouter();

  // page state
  const [value, setValue] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState();

  const handleUsernameChange = (e) => {
    setValue({ ...value, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setValue({ ...value, password: e.target.value });
  };

  const handleSubmit = async () => {
    if (value.password.length < 4) {
      setMessage('Password must be more than 4 characters');
      return;
    }
    const res = await userApi.login(value);
    const { status } = res.data;
    if (status === 'success') {
      router.push('/');
    } else if (status) {
      setMessage(res.data.message);
    }
  };

  const handleInputFocus = (e) => {
    setMessage('');
  };

  return (
    <FormAuthLayout>
      <div className={cx('form', 'login')}>
        <div className={cx('form__heading')}>SOIOT SYSTEM</div>
        {message && <div className={cx('form__error')}>{message}</div>}
        <InputField
          type="text"
          placeholder="Username"
          required
          value={value.username}
          onChange={handleUsernameChange}
          onFocus={handleInputFocus}
        />
        <InputField
          type="password"
          placeholder="Password"
          required
          value={value.password}
          onChange={handlePasswordChange}
          onFocus={handleInputFocus}
        />
        <div className={cx('form__actions')}>
          <Button primary onClick={handleSubmit}>
            LOGIN
          </Button>
          <Link href="/register">or create new account</Link>
        </div>
      </div>
    </FormAuthLayout>
  );
}

export default LoginPage;
