import { RequiredConnectProps, connect } from 'umi';
import { useEffect, FC } from 'react';

type IPageProps = RequiredConnectProps & IInterview.IInterviewPageProps;

const Interview: FC<IPageProps> = (props) => {
  const { dispatch, infiniteList } = props;

  useEffect(() => {
    dispatch({
      type: 'interview/queryInfiniteList',
    });
  }, []);
  return (
    <div>
      {infiniteList?.map(({ name, value, type }) => (
        <div key={name}>{`name: ${name}, value: ${value}, type: ${type}`}</div>
      ))}
    </div>
  );
};

export default connect(({ interview }: IModel.IRootState) => ({
  infiniteList: interview.infiniteList,
}))(Interview);
