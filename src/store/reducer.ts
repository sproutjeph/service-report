import { ActionKinds, IActions, IReport, IState } from "../utils/types";

const reducer = (state: IState, action: IActions) => {
  if (action.type === ActionKinds.CREATE_REPORT) {
    const newReport: IReport = action.payload;
    return {
      ...state,
      allReports: [...state.allReports, { ...newReport }],
    };
  }

  if (action.type === ActionKinds.REMOVE_REPORT) {
    const newReports = state.allReports.filter(
      (report) => report.id !== action.payload
    );
    return {
      ...state,
      allReports: newReports,
    };
  }

  if (action.type === ActionKinds.EDIT_REPORT) {
    const editItem = state.allReports.find(
      (item) => item.id === action.payload
    );

    return {
      ...state,
      isEditing: true,
      editData: editItem!,
      editId: action.payload,
    };
  }

  if (action.type === ActionKinds.NOT_EDITING) {
    return {
      ...state,
      isEditing: false,
    };
  }

  if (action.type === ActionKinds.UPDATE_REPORT) {
    const updatedReports = state.allReports.map((report) => {
      if (report.id === action.payload.id) {
        return {
          ...action.payload.updateData,
        };
      }
    });

    const notUpdatedReports = state.allReports.filter(
      (report) => report.id !== action.payload.id
    );
    return {
      ...state,
      allReports: [...notUpdatedReports, ...updatedReports],
    };
  }

  return state;
};

export default reducer;
