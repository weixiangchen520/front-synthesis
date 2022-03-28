declare namespace IInterview {
  interface IInfinite {
    name: string;
    value: number;
    type: number;
  }

  interface IInterviewModelState {
    infiniteList: IInfinite[];
  }

  interface IInterviewPageProps {
    infiniteList: IInfinite[];
    loading: boolean | undefined;
  }
}
