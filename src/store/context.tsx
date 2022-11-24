import Reducer from "./reducer";
import { useContext, useReducer, createContext, ReactNode } from "react";
import { ActionKinds, IReport, IState, IValues } from "../utils/types";

let savedReports;
if (typeof window !== "undefined") {
  savedReports = window.localStorage.getItem("reports");
}

const initialState: IState = {
  allReports: savedReports ? JSON.parse(savedReports) : [],
};

const AppContext = createContext({} as IValues);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  function addToLocalStorage(key: string, reports: IReport[]) {
    localStorage.setItem(key, JSON.stringify(reports));
  }
  function createReport(newReport: IReport) {
    dispatch({ type: ActionKinds.CREATEREPORT, payload: newReport });
    addToLocalStorage("reports", [newReport]);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        createReport,
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
