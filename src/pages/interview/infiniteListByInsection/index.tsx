import { RequiredConnectProps, connect } from 'umi';
import { useEffect, useRef, FC } from 'react';
import { Spin } from 'antd';
import styles from './index.less';

type IPageProps = RequiredConnectProps & IInterview.IInterviewPageProps;

const pageSize = 10;
const InfiniteListByInsection: FC<IPageProps> = (props) => {
  const { dispatch, infiniteList, loading } = props;
  const pageNumber = useRef<number>(1);

  useEffect(() => {
    const insectionObserver = new IntersectionObserver((entries) => {
      const { intersectionRatio } = entries.at(0)!;
      if (intersectionRatio === 1) {
        console.log('触底 entries', loading, entries);
        if (!loading) {
          dispatch({
            type: 'interview/queryInfiniteList',
            payload: { pageNumber: pageNumber.current++, pageSize },
          });
        }
      } else {
        console.log('上拉 entries', entries);
      }
    });
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
          key={value}
        >{`name: ${name}, value: ${value}, type: ${type}`}</div>
      ))}
      <div id="bottom">
        {loading && (
          <div className={styles.loadingWrapper}>
            <Spin />
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(({ interview, loading }: IModel.IRootState) => ({
  infiniteList: interview.infiniteList,
  loading: loading.effects['interview/queryInfiniteList'],
}))(InfiniteListByInsection);
