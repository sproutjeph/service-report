import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React from "react";

const BibleStudents = () => {
  const router = useRouter();
  return (
    <>
      <section className="mt-10 p-2">
        <ArrowLeftIcon
          title="Back"
          onClick={() => router.push("/")}
          className="h-6 w-6 text-white text-end cursor-pointer mb-4"
        />
        <div>BibleStudents</div>
      </section>
    </>
  );
};

export default BibleStudents;
