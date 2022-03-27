declare namespace IInterview {
  interface IInfinite {
    name: string;
    value: number;
    type: number;
  }

  interface IInterviewModelState {
    name: string;
    infiniteList: IInfinite[];
  }

  interface IInterviewPageProps {
    infiniteList: IInfinite[];
  }
}
