import { RequiredConnectProps, connect } from 'umi';
import { useEffect, FC } from 'react';
import styles from './index.less';

type IPageProps = RequiredConnectProps & IInterview.IInterviewPageProps;

const Interview: FC<IPageProps> = (props) => {
  const { dispatch, infiniteList } = props;

  useEffect(() => {
    dispatch({ type: 'interview/queryInfiniteList' });
  }, []);
  return (
    <div className={styles.container}>
      {infiniteList?.map(({ name, value, type }) => (
        <div
          className={styles.item}
          key={name}
        >{`name: ${name}, value: ${value}, type: ${type}`}</div>
      ))}
    </div>
  );
};

export default connect(({ interview }: IModel.IRootState) => ({
  infiniteList: interview.infiniteList,
}))(Interview);
