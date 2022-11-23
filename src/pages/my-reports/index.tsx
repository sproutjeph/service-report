import React from "react";
import { Report } from "../../components";
import { useGlobalContext } from "../../store/context";
const ReportList = () => {
  const { allReports } = useGlobalContext();
  return (
    <>
      <div className="overflow-y-scroll my-20 flex flex-col gap-y-2 scrollbar-hide">
        {allReports.map((report) => (
          <Report key={report.id} report={report} />
        ))}
      </div>
    </>
  );
};

export default ReportList;
