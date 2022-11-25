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
        className="absolute p-2 bottom-3 shadow-lg right-5 lg:right-56 text-white rounded-full bg-violet-900 "
        onClick={() => {
          notEditing();
          router.push("/enter-report");
        }}
      >
        <PlusIcon className="w-8 h-8 text-white" />
      </button>
      <div className="flex gap-x-4 justify-center">
        <div className="flex flex-col items-center cursor-pointer">
          <HomeIcon className="h-8 w-8" />
          <h4>Home</h4>
        </div>
        <div className="flex flex-col items-center cursor-pointer ">
          <UserGroupIcon className="h-8 w-8" />
          <h4>Students</h4>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <BookOpenIcon className="h-8 w-8" />
          <h4>Report</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
