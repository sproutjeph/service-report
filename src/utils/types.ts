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
  isEditing: boolean;
  editData: IReport;
  editId: string;
}

export enum ActionKinds {
  "LOADING" = "LOADING",
  "CREATE_REPORT" = "CREATE_REPORT",
  "REMOVE_REPORT" = "REMOVE_REPORT",
  "EDIT_REPORT" = "EDIT_REPORT",
  "NOT_EDITING" = "NOT_EDITING",
  "UPDATE_REPORT" = "UPDATE_REPORT",
}
export interface IActions {
  type: ActionKinds;
  payload?: any;
}

export interface IValues extends IState {
  createReport: (newReport: IReport) => void;
  removeReport: (id: string) => void;
  editReport: (id: string) => void;
  notEditing: () => void;
  updateReport: (id: string, updateData: IReport) => void;
}
