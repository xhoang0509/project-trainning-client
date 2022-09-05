import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import userApi from '../../src/api/userApi';
import Button from '../../src/components/Button';
import InputField from '../../src/components/Input';
import FormAuthLayout from '../../src/layouts/FormAuthLayout';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { login } from '../../src/redux/userSlice';

const cx = classNames.bind(styles);

function Register() {
  const router = useRouter();
  const dispatch = useDispatch();

  // page state
  const [value, setValue] = useState({
    name: '',
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setValue({ ...value, name: e.target.value });
  };

  const handleUsernameChange = (e) => {
    setValue({ ...value, username: e.target.value.toLowerCase() });
  };

  const handlePasswordChange = (e) => {
    setValue({ ...value, password: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await userApi.register(value);
    console.log(res);

    if (res.data.status === 'success') {
      router.push('/');
      dispatch(login(value));
    } else {
      setMessage(res.data.message);
    }
  };

  const handleInputFocus = () => {
    setMessage('');
  };

  return (
    <FormAuthLayout>
      <div className={cx('form', 'login')}>
        <div className={cx('form__heading')}>SOIOT SYSTEM</div>
        {message && <div className={cx('form__error')}>{message}</div>}
        <InputField
          value={value.name}
          onChange={handleNameChange}
          type="text"
          placeholder="Name"
          required
          onFocus={handleInputFocus}
        />
        <InputField
          value={value.username}
          onChange={handleUsernameChange}
          type="text"
          placeholder="Username"
          required
          onFocus={handleInputFocus}
        />
        <InputField
          value={value.password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          required
          onFocus={handleInputFocus}
        />
        <div className={cx('form__actions')}>
          <Button primary onClick={handleSubmit}>
            REGISTER
          </Button>
          <Link href="/login">or login</Link>
        </div>
      </div>
    </FormAuthLayout>
  );
}

export default Register;
