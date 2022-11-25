import { v4 as uuidV4 } from "uuid";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IReport } from "../../utils/types";
import { useGlobalContext } from "../../store/context";
const EnterReport = () => {
  const router = useRouter();
  const { createReport, editData, isEditing, updateReport, editId } =
    useGlobalContext();
  const [reportValues, setReportValues] = useState({
    name: isEditing ? editData.name : "",
    month: isEditing ? editData.month : "",
    placements: isEditing ? editData.placements : "",
    video: isEditing ? editData.video : "",
    hours: isEditing ? editData.hours : "",
    returnVists: isEditing ? editData.returnVists : "",
    bibleStudies: isEditing ? editData.bibleStudies : "",
    comments: isEditing ? editData.comments : "",
  });

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setReportValues({
      ...reportValues,
      [e.target.name]: e.target.value,
    });
  }

  const year = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const monthData = [
    {
      id: 1,
      month: "Jan",
      year,
    },
    {
      id: 2,
      month: "Feb",
      year,
    },
    {
      id: 3,
      month: "Mar",
      year,
    },
    {
      id: 4,
      month: "Apr",
      year,
    },
    {
      id: 5,
      month: "May",
      year,
    },
    {
      id: 6,
      month: "June",
      year,
    },
    {
      id: 7,
      month: "July",
      year,
    },
    {
      id: 8,
      month: "Aug",
      year,
    },
    {
      id: 9,
      month: "Sept",
      year,
    },
    {
      id: 10,
      month: "Oct",
      year,
    },
    {
      id: 11,
      month: "Nov",
      year,
    },
    {
      id: 12,
      month: "Dec",
      year,
    },
  ];

  const newReport: IReport = {
    id: uuidV4(),
    name: reportValues.name,
    month: reportValues.month,
    placements: reportValues.placements,
    video: reportValues.video,
    hours: reportValues.hours,
    returnVists: reportValues.returnVists,
    bibleStudies: reportValues.bibleStudies,
    comments: reportValues.comments,
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isEditing) {
      updateReport(editId, { ...newReport, id: editId });
      router.push("/my-reports");
      return;
    }
    if (reportValues.name.trim().length === 0 && !isEditing) {
      toast("plaese enter your Name");
      return;
    }
    createReport(newReport);

    router.push("/my-reports");
  }
  return (
    <form
      className="max-w-xl mx-auto bg-[#1B1B1B] p-4 rounded-md my-20"
      onSubmit={(e) => onSubmit(e)}
    >
      <div className="text-black grid grid-cols-2 gap-y-6 gap-x-3">
        <div className="col-span-2 ">
          <label htmlFor="" className="text-white block">
            Name
          </label>
          <input
            name="name"
            value={reportValues.name}
            onChange={(e) => onChangeHandler(e)}
            type="text"
            className="rounded-lg mt-1 w-full "
          />
        </div>
        <div className=" ">
          <label htmlFor="" className="text-white block">
            Month
          </label>
          <select
            name="month"
            value={reportValues.month}
            onChange={(e) => onChangeHandler(e)}
            className="rounded-lg mt-1 w-full"
          >
            <option> select Month</option>
            {monthData.map(({ id, month, year }) => (
              <option key={id}>{`${month} ${year}`}</option>
            ))}
          </select>
        </div>
        <div className=" ">
          <label htmlFor="" className="text-white block">
            Placements
          </label>
          <input
            name="placements"
            value={reportValues.placements}
            onChange={(e) => onChangeHandler(e)}
            type="number"
            className="rounded-lg mt-1 w-full"
          />
        </div>
        <div className=" ">
          <label htmlFor="" className="text-white block">
            Video Showing
          </label>
          <input
            name="video"
            value={reportValues.video}
            onChange={(e) => onChangeHandler(e)}
            type="number"
            className="rounded-lg mt-1  w-full"
          />
        </div>
        <div className=" ">
          <label htmlFor="" className="text-white block">
            Hours
          </label>
          <input
            name="hours"
            value={reportValues.hours}
            onChange={(e) => onChangeHandler(e)}
            type="number"
            className="rounded-lg mt-1 w-full"
          />
        </div>
        <div className=" ">
          <label htmlFor="" className="text-white block">
            Return Vists
          </label>
          <input
            name="returnVists"
            value={reportValues.returnVists}
            onChange={(e) => onChangeHandler(e)}
            type="number"
            className="rounded-lg mt-1 w-full"
          />
        </div>
        <div className=" ">
          <label htmlFor="" className="text-white block">
            Bible Studies
          </label>
          <input
            name="bibleStudies"
            value={reportValues.bibleStudies}
            onChange={(e) => onChangeHandler(e)}
            type="number"
            className="rounded-lg mt-1 w-full"
          />
        </div>
        <div className=" ">
          <label htmlFor="" className="text-white block">
            Comments
          </label>
          <input
            name="comments"
            value={reportValues.comments}
            onChange={(e) => onChangeHandler(e)}
            type="text"
            className="rounded-lg mt-1 w-full"
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="block mt-[26px] py-2 text-white bg-violet-900  rounded-lg   w-full"
          >
            {isEditing ? "Edit" : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EnterReport;
