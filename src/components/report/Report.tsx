import React from "react";
import { IReport } from "../../utils/types";

interface IProps {
  report: IReport;
}

const Report = ({ report }: IProps) => {
  return (
    <div className="bg-[#1B1B1B] py-4">
      <table className="w-[90%] text-center border border-white  mx-auto">
        <caption>FIELD SERVICE REPORT</caption>
        <tbody>
          <tr>
            <td width="100%" className="text-left">
              Name :{" "}
              <span className="ml-2 tracking-widest">
                {" "}
                {report.name.toUpperCase()}
              </span>
            </td>
          </tr>
          <tr className="text-left">
            <td width="100%">
              Month :{" "}
              <span className="ml-2 tracking-widest"> {report.month}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <table className="w-[90%] text-center border border-white mx-auto">
        <tbody>
          <tr>
            <td>Placements (Printed and Electronic)</td>
            <td>{report.placements}</td>
          </tr>
          <tr>
            <td>Video Showing</td>
            <td>{report.video}</td>
          </tr>
          <tr>
            <td>Hours</td>
            <td>{report.hours}</td>
          </tr>
          <tr>
            <td>Return Visits</td>
            <td>{report.returnVists}</td>
          </tr>
          <tr>
            <td>Number of Different Bible Studies Conducted</td>
            <td>{report.bibleStudies}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="w-[90%] text-center border border-white mx-auto">
        <tbody>
          <tr>
            <td>
              Comments: <span>{report.comments}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <tbody className="flex px-4 gap-20">
          <tr>
            <td className="border-none">
              <button className="bg-violet-900 py-2 px-10 rounded-md">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-none">
              <button className=" bg-violet-900 py-2 px-10 rounded-md">
                Save as PDF
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Report;
