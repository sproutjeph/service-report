import { ActionKinds, IActions, IReport, IState } from "../utils/types";

const reducer = (state: IState, action: IActions) => {
  if (action.type === ActionKinds.CREATEREPORT) {
    const newReport: IReport = action.payload;
    return {
      ...state,
      allReports: [...state.allReports, { ...newReport }],
    };
  }

  return state;
};

export default reducer;
