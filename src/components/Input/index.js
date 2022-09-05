import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

function InputField({
  onChange,
  onFocus,
  className,
  type,
  value,
  placeholder,
  min,
  max,
  required,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      className={cx('wrapper', className)}
      type={type || 'text'}
      placeholder={placeholder}
      required={required}
      min={min}
      max={max}
    />
  );
}

export default InputField;
