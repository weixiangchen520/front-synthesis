import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import service from '@/utils/service';

interface InterviewModelType {
  namespace: 'interview';
  state: IInterview.IInterviewModelState;
  effects: {
    queryInfiniteList: Effect;
  };
  reducers: {
    save: Reducer<IInterview.IInterviewModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const IndexModel: InterviewModelType = {
  namespace: 'interview',

  state: {
    name: '',
    infiniteList: [],
  },

  effects: {
    *queryInfiniteList({ payload }, { call, put }) {
      const res = yield call(service, '/interview/infiniteList', {});
      yield put({ type: 'save', payload: { infiniteList: res?.list || [] } });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/interview/infinite-list') {
        }
      });
    },
  },
};

export default IndexModel;

// model template
