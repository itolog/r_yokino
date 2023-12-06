import { useEffect } from "react";

import { useAppSelector } from "@/store/hooks.ts";
import { getTheme } from "@/store/selectors.ts";

const useTheme = () => {
  const theme = useAppSelector(getTheme);
  useEffect(() => {
    const root = document.querySelector("html");
    if (root) {
      root.dataset.theme = theme;
    }
  }, [theme]);
};

export default useTheme;
