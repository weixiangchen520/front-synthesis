declare namespace IModel {
  interface IRootState {
    loading: {
      global: boolean;
      effects: { [key: string]: boolean | undefined };
      models: {
        [key: string]: any;
      };
    };
    interview: IInterview.IInterviewModelState;
  }
}
