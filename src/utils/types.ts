export interface PageMeta {
  title: string;
  description: string;
  // cardImage: string;
}

export interface IReport {
  id: string;
  name: string;
  month: string;
  placements: string;
  video: string;
  hours: string;
  returnVists: string;
  bibleStudies: string;
  comments: string;
}

export interface IState {
  allReports: IReport[];
}

export enum ActionKinds {
  "LOADING" = "LOADING",
  "CREATEREPORT" = "CREATEREPORT",
}
export interface IActions {
  type: ActionKinds;
  payload: any;
}

export interface IValues extends IState {
  createReport: (newReport: IReport) => void;
}
