import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  PlusIcon,
  UserGroupIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { useGlobalContext } from "../../store/context";
import { HomeIcon } from "@heroicons/react/24/outline";
const Footer = () => {
  const router = useRouter();
  const { notEditing } = useGlobalContext();

  return (
    <footer className="bg-[#1B1B1B] shadow-md bottom-0 w-full fixed p-2">
      <button
        className="absolute p-2 bottom-2 shadow-lg right-5 lg:right-56 text-white rounded-full bg-violet-600 "
        onClick={() => {
          notEditing();
          router.push("/enter-report");
        }}
      >
        <PlusIcon className="w-8 h-8 text-white" />
      </button>
      <div className="flex gap-x-10 justify-center">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <HomeIcon className="h-6 w-6" />
          <h6 className="text-sm">Home</h6>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer "
          onClick={() => router.push("/bible-students")}
        >
          <UserGroupIcon className="h-6 w-6" />
          <h4 className="text-sm">Students</h4>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => router.push("/my-reports")}
        >
          <BookOpenIcon className="h-6 w-6" />
          <h4 className="text-sm">Report</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
