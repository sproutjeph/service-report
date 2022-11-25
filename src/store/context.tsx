import Reducer from "./reducer";
import { useContext, useReducer, createContext, ReactNode } from "react";
import { ActionKinds, IReport, IState, IValues } from "../utils/types";

let savedReports: any;
if (typeof window !== "undefined") {
  savedReports = window.localStorage.getItem("reports");
}

const initialState: IState = {
  allReports: savedReports ? JSON.parse(savedReports) : [],
  isEditing: false,
  editData: {
    id: "",
    name: "",
    month: "",
    placements: "",
    video: "",
    hours: "",
    returnVists: "",
    bibleStudies: "",
    comments: "",
  },
  editId: "",
};

const AppContext = createContext({} as IValues);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  function addToLocalStorage(key: string, reports: IReport[]) {
    localStorage.setItem(key, JSON.stringify(reports));
  }

  function removeFromLocalStorage(id: string) {
    if (typeof window !== "undefined") {
      const reportsInLStorage = window.localStorage.getItem("reports");

      if (reportsInLStorage) {
        const itemsInLStorage = JSON.parse(reportsInLStorage);
        const newReports = itemsInLStorage.filter(
          (report: IReport) => report.id !== id
        );
        addToLocalStorage("reports", newReports);
      }
    }
  }

  function createReport(newReport: IReport) {
    dispatch({ type: ActionKinds.CREATE_REPORT, payload: newReport });
    addToLocalStorage("reports", [...state.allReports, newReport]);
  }

  function editReport(id: string) {
    dispatch({ type: ActionKinds.EDIT_REPORT, payload: id });
  }

  function updateReport(id: string, updateData: IReport) {
    dispatch({
      type: ActionKinds.UPDATE_REPORT,
      payload: { id: id, updateData: updateData },
    });

    updateLocalStorage(id, updateData);
  }

  function updateLocalStorage(id: string, updateData: IReport) {
    if (typeof window !== "undefined") {
      const reportsInLStorage = window.localStorage.getItem("reports");

      if (reportsInLStorage) {
        const itemsInLStorage = JSON.parse(reportsInLStorage);
        const updatedReport = itemsInLStorage.map((report: IReport) => {
          if (report.id === id) {
            return {
              ...updateData,
            };
          }
        });
        const notUpdatedReports = state.allReports.filter(
          (report) => report.id !== id
        );

        addToLocalStorage("reports", [...notUpdatedReports, ...updatedReport]);
      }
    }
  }

  function notEditing() {
    dispatch({ type: ActionKinds.NOT_EDITING });
  }

  function removeReport(id: string) {
    dispatch({ type: ActionKinds.REMOVE_REPORT, payload: id });
    removeFromLocalStorage(id);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        createReport,
        removeReport,
        editReport,
        notEditing,
        updateReport,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, initialState };
