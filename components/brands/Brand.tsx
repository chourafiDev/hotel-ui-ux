import { cn } from "@/lib/utils";
import React from "react";

const Brand = ({ logo: Logo }: { logo: React.ElementType }) => {
  return (
    <figure className={cn("relative w-44 cursor-pointer")}>
      <Logo className="size-40" />
    </figure>
  );
};

export default Brand;
