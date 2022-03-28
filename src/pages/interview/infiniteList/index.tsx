import { RequiredConnectProps, connect } from 'umi';
import { useEffect, FC } from 'react';
import styles from './index.less';

type IPageProps = RequiredConnectProps & IInterview.IInterviewPageProps;

const InfiniteList: FC<IPageProps> = (props) => {
  const { dispatch, infiniteList } = props;

  useEffect(() => {
    dispatch({ type: 'interview/queryInfiniteList' });

    const targetContainer = document.getElementById('scroll-container');
    const handleScroll = () => {
      const clientHeight = targetContainer?.clientHeight ?? 0;
      const scrollTop = targetContainer?.scrollTop ?? 0;
      const scrollHeight = targetContainer?.scrollHeight ?? 0;
      if (clientHeight + scrollTop >= scrollHeight) {
        console.log('触底');
      } else if (scrollTop === 0) {
        console.log('触顶');
      }
    };
    targetContainer!.addEventListener('scroll', handleScroll);
    return () => {
      targetContainer!.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={styles.container} id="scroll-container">
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
}))(InfiniteList);
