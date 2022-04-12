import styles from './index.less';
import 'antd/dist/antd.css';

export default function IndexPage() {
  return (
    <div className={styles.wrapper}>
      <iframe className={styles.iframe} src={'https://f2e.tech/'}></iframe>
    </div>
  );
}
