import React from "react";
import { Button } from "../ui/button";

const Filter = () => {
  return (
    <div className="flex md:items-center items-start gap-3">
      <p className="text-slate-950 dark:text-white font-medium">Filter:</p>
      <ul className="flex flex-wrap items-center gap-2">
        <li>
          <Button variant={"black"} rounded={"full"} size={"sm"}>
            Hotels
          </Button>
        </li>
        <li>
          <Button variant={"outline"} rounded={"full"} size={"sm"}>
            Villas
          </Button>
        </li>
        <li>
          <Button variant={"outline"} rounded={"full"} size={"sm"}>
            Apartments
          </Button>
        </li>
        <li>
          <Button variant={"outline"} rounded={"full"} size={"sm"}>
            Resorts
          </Button>
        </li>
        <li>
          <Button variant={"outline"} rounded={"full"} size={"sm"}>
            Cottages
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
