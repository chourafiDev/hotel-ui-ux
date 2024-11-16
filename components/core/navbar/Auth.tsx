import { Button } from "@/components/ui/button";
import React from "react";

const Auth = () => {
  return (
    <div className="md:flex hidden items-center gap-2">
      <Button variant={"link"}>Login</Button>
      <Button>Sign Up</Button>
    </div>
  );
};

export default Auth;
