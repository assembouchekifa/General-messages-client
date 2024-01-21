"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

function ThemProvede({ children }: { children: React.ReactNode }) {
  const [make, setMake] = useState(false);

  useEffect(() => {
    setMake(true);
  }, []);

  if (!make) {
    return <>{children} </>;
  }

  return <ThemeProvider attribute="class">{children} </ThemeProvider>;
}

export default ThemProvede;
