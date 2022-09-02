import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

function InputField({ className, type, value, placeholder, min, max, required }) {
  return (
    <input
      className={cx('wrapper', className)}
      type={type || 'text'}
      value={value}
      placeholder={placeholder}
      required={required}
      min={min}
      max={max}
    />
  );
}

export default InputField;
