import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

function Button({ primary, children }) {
  const classNames = cx("wrapper", primary && "primary");
  return <button className={classNames}>{children}</button>;
}

export default Button;
