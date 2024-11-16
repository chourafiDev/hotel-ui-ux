import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Auth from "./Auth";
import Search from "./Search";
import ToggleLang from "./ToggleLang";
import ToggleTheme from "./ToggleTheme";
import ToggleNavBar from "./ToggleNavBar";

const index = () => {
  return (
    <nav className="flex relative justify-between items-center py-3 md:px-6 px-2">
      <div className="flex items-center gap-14">
        <Logo />
        <NavLinks />
      </div>
      <Search />
      <div className="flex items-center gap-6">
        <ToggleTheme />
        <ToggleLang />
        <Auth />
        <ToggleNavBar />
      </div>
    </nav>
  );
};

export default index;
