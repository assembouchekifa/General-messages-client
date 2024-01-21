"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [make, setMake] = useState(false);

  function hundelClick() {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  }

  useEffect(() => {
    setMake(true);
  }, []);
  if (!make) {
    return null;
  }

  return (
    <button
      className="relative size-6
    "
      onClick={hundelClick}
    >
      {" "}
      {theme === "light" ? (
        <CiLight className="absolute top-0 left-0 size-full" />
      ) : (
        <MdDarkMode className="absolute top-0 left-0 size-full" />
      )}{" "}
    </button>
  );
}

export default ThemeSwitcher;
