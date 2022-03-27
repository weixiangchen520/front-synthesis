import { RequiredConnectProps, connect } from 'umi';
import { useEffect, FC } from 'react';
import styles from './index.less';

type IPageProps = RequiredConnectProps & IInterview.IInterviewPageProps;

const InfiniteListByInsection: FC<IPageProps> = (props) => {
  const { dispatch, infiniteList } = props;

  useEffect(() => {
    dispatch({ type: 'interview/queryInfiniteList' });

    const insectionObserver = new IntersectionObserver((entries) =>
      console.log(entries),
    );
    const bottomElement = document.getElementById('bottom');
    insectionObserver.observe(bottomElement!);

    return () => {
      insectionObserver.unobserve(bottomElement!);
      insectionObserver.disconnect();
    };
  }, []);
  return (
    <div className={styles.container}>
      {infiniteList?.map(({ name, value, type }) => (
        <div
          className={styles.item}
          key={name}
        >{`name: ${name}, value: ${value}, type: ${type}`}</div>
      ))}
      <div id="bottom" style={{ height: '10px' }}></div>
    </div>
  );
};

export default connect(({ interview }: IModel.IRootState) => ({
  infiniteList: interview.infiniteList,
}))(InfiniteListByInsection);
