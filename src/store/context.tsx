import { useContext, useReducer, createContext, ReactNode } from "react";
import { ActionKinds, IReport, IState, IValues } from "../utils/types";
import Reducer from "./reducer";

const initialState: IState = {
  allReports: [],
};

const AppContext = createContext({} as IValues);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function createReport(newReport: IReport) {
    dispatch({ type: ActionKinds.CREATEREPORT, payload: newReport });
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
