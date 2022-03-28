import { RequiredConnectProps, connect } from 'umi';
import { useEffect, FC } from 'react';
import { throttle } from '@/utils/common';
import styles from './index.less';

type IPageProps = RequiredConnectProps & IInterview.IInterviewPageProps;

const InfiniteList: FC<IPageProps> = (props) => {
  const { dispatch, infiniteList } = props;

  useEffect(() => {
    dispatch({ type: 'interview/queryInfiniteList' });

    const targetContainer = document.getElementById('scroll-container');
    const handleScroll = () => {
      // 性能问题：浏览器为了反馈给用户元素的实时属性，会立即执行待渲染队列中的待处理变化，然后重新计算元素几何属性，重新构建渲染树
      const clientHeight = targetContainer?.clientHeight ?? 0;
      const scrollTop = targetContainer?.scrollTop ?? 0;
      const scrollHeight = targetContainer?.scrollHeight ?? 0;
      if (clientHeight + scrollTop >= scrollHeight) {
        console.log('触底');
      } else if (scrollTop === 0) {
        console.log('触顶');
      }
    };
    const throttleHandleScroll = throttle(handleScroll, 500);
    // 性能问题：scroll触发频率会很高，需要用节流处理
    targetContainer!.addEventListener('scroll', throttleHandleScroll);
    return () => {
      targetContainer!.removeEventListener('scroll', throttleHandleScroll);
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
