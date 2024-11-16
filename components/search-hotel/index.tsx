"use client";

import { ArrowRightIcon } from "@/lib/assets";
import { Button } from "../ui/button";
import GuestRoom from "./GuestRoom";
import CheckInCheckOut from "./CheckInCheckOut";
import Location from "./Location";
import Filter from "./Filter";
import { useState } from "react";

const Index = () => {
  const [guest, setGuest] = useState(1);
  const [room, setRoom] = useState(1);

  return (
    <div className="absolute w-full bottom-0 left-0 md:p-6 p-2">
      <div className="">
        <h1 className="md:text-[44px] text-[26px] font-semibold text-white mb-3">
          Find Your Best Staycation
        </h1>

        <div className="rounded-xl bg-white dark:bg-slate-950 p-4 w-full space-y-6">
          <div className="flex lg:flex-row flex-col items-center gap-2 w-full">
            <Location />
            <CheckInCheckOut />
            <GuestRoom
              setGuest={setGuest}
              setRoom={setRoom}
              guest={guest}
              room={room}
            />
          </div>

          <div className="flex md:flex-row flex-col md:items-center justify-between gap-5">
            <Filter />
            <Button variant={"black"} size={"lg"}>
              Search <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
