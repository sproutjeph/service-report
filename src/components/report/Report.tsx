import React from "react";
import { IReport } from "../../utils/types";
import { useGlobalContext } from "../../store/context";
import { useRouter } from "next/router";

interface IProps {
  report: IReport;
}

const Report = ({ report }: IProps) => {
  const { removeReport, editReport } = useGlobalContext();
  const router = useRouter();
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
            <td>Bible Studies Conducted</td>
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
        <tbody className="flex px-4 md:px-8">
          <tr>
            <td className="border-none">
              <button
                className="bg-red-300 py-2 px-5 rounded-md"
                onClick={() => removeReport(report.id)}
              >
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-none">
              <button
                type="button"
                className="bg-green-300 py-2 px-5 rounded-md"
                onClick={() => {
                  editReport(report.id);
                  router.push("/enter-report");
                }}
              >
                Edit
              </button>
            </td>
          </tr>
          <tr className="">
            <td className="border-none">
              <button className=" bg-violet-900 py-2 px-5 rounded-md">
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Report;
