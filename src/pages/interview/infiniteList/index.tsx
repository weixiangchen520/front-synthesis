import { RequiredConnectProps, connect } from 'umi';
import { useEffect, FC } from 'react';

const Interview: FC<RequiredConnectProps> = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    dispatch({
      type: 'interview/queryInfiniteList',
    });
  }, []);
  return <div>无限列表</div>;
};

export default connect()(Interview);
