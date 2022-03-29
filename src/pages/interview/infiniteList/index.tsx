import { RequiredConnectProps, connect } from 'umi';
import { useEffect, useRef, FC } from 'react';
import { throttle } from '@/utils/common';
import styles from './index.less';
import { Spin } from 'antd';

type IPageProps = RequiredConnectProps & IInterview.IInterviewPageProps;

const pageSize = 10;
const InfiniteList: FC<IPageProps> = (props) => {
  const { dispatch, infiniteList, loading } = props;
  const pageNumber = useRef<number>(1);
  const loadingRef = useRef<boolean | undefined>(loading);
  loadingRef.current = loading;

  useEffect(() => {
    dispatch({
      type: 'interview/queryInfiniteList',
      payload: { pageNumebr: pageNumber.current++, pageSize },
    });

    const targetContainer = document.getElementById('scroll-container');
    const handleScroll = () => {
      // 性能问题：浏览器为了反馈给用户元素的实时属性，会立即执行待渲染队列中的待处理变化，然后重新计算元素几何属性，重新构建渲染树
      const clientHeight = targetContainer?.clientHeight ?? 0;
      const scrollTop = targetContainer?.scrollTop ?? 0;
      const scrollHeight = targetContainer?.scrollHeight ?? 0;
      console.log(clientHeight, scrollHeight, scrollTop);
      if (clientHeight + scrollTop >= scrollHeight) {
        console.log('触底', loadingRef.current);
        if (!loadingRef.current) {
          dispatch({
            type: 'interview/queryInfiniteList',
            payload: { pageNumebr: pageNumber.current++, pageSize },
          });
        }
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
          key={value}
        >{`name: ${name}, value: ${value}, type: ${type}`}</div>
      ))}
      {loading && (
        <div className={styles.loadingWrapper}>
          <Spin />
        </div>
      )}
    </div>
  );
};

export default connect(({ interview, loading }: IModel.IRootState) => ({
  infiniteList: interview.infiniteList,
  loading: loading.effects['interview/queryInfiniteList'],
}))(InfiniteList);
