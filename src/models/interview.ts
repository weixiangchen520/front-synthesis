import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import service from '@/utils/service';

interface InterviewModelType {
  namespace: 'interview';
  state: IInterview.IInterviewModelState;
  effects: {
    queryInfiniteList: Effect;
  };
  reducers: {
    saveInfiniteList: Reducer<IInterview.IInterviewModelState>;
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
    infiniteList: [],
  },

  effects: {
    *queryInfiniteList({ payload }, { call, put }) {
      const res = yield call(service, '/interview/infiniteList', payload);
      yield put({
        type: 'saveInfiniteList',
        payload: { infiniteList: res?.list || [] },
      });
    },
  },
  reducers: {
    saveInfiniteList(state, action) {
      console.log();
      return {
        ...state,
        infiniteList: [
          ...(state?.infiniteList ?? []),
          ...(action.payload?.infiniteList ?? []),
        ],
      };
    },
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
