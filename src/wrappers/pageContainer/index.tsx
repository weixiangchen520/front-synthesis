import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';

export default ({ children }: any) => {
  return (
    <PageContainer>
      <div className={styles.container}>{children}</div>
    </PageContainer>
  );
};
