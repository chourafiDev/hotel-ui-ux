import { GlobalIcon } from "@/lib/assets";
import React from "react";

const ToggleLang = () => {
  return (
    <button className="md:flex hidden items-center gap-2">
      <div className="size-7 flex justify-center items-center bg-white rounded-full">
        <GlobalIcon className="text-slate-800 size-5" />
      </div>
      <p className="text-white text-base font-medium">EN</p>
    </button>
  );
};

export default ToggleLang;
