"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { MoonStarsIcon, SunIcon } from "@/lib/assets";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(false);

  // Sync state with the current theme
  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  const handleThemeChange = (isChecked: boolean) => {
    setChecked(isChecked);
    setTheme(isChecked ? "dark" : "light");
  };

  return (
    <div className="md:block hidden">
      <div className="relative inline-grid h-7 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id="switch-13"
          checked={checked}
          onCheckedChange={handleThemeChange}
          className="peer absolute inset-0 h-[inherit] w-auto data-[state=unchecked]:bg-slate-100/20 backdrop-blur-md [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
        />
        <span className="pointer-events-none relative ms-0.5 flex min-w-7 items-center justify-center text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full rtl:peer-data-[state=unchecked]:-translate-x-full">
          <MoonStarsIcon className="size-4" aria-hidden="true" />
        </span>
        <span className="pointer-events-none relative me-0.5 flex min-w-7 items-center justify-center text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=unchecked]:invisible peer-data-[state=checked]:-translate-x-full peer-data-[state=checked]:text-slate-900 rtl:peer-data-[state=checked]:translate-x-full">
          <SunIcon className="size-4" aria-hidden="true" />
        </span>
      </div>
      <Label htmlFor="switch-13" className="sr-only">
        Labeled switch
      </Label>
    </div>
  );
}
