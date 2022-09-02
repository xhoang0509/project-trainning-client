import styles from './styles.module.css';

function FormAuthLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default FormAuthLayout;
