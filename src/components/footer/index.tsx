import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-[#1B1B1B] shadow-md bottom-0 w-full fixed p-4">
      <button
        className="absolute p-2 bottom-1 shadow-lg right-5 lg:right-56 text-white rounded-full bg-violet-900 "
        onClick={() => router.push("/enter-report")}
      >
        <PlusIcon className="w-8 h-8 text-white" />
      </button>
      <div className="flex">
        <h1>You</h1>
      </div>
    </footer>
  );
};

export default Footer;
