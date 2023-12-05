import { ChangeEvent, useCallback } from "react";

import ThemeSwitch from "@/ui/switch/ThemeSwitch/ThemeSwitch.tsx";

import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { setTheme } from "@/store/settings/settingsSlice.ts";

const Settings = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.settings.theme);

  const handleThemeChange = useCallback(
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
      dispatch(setTheme(checked ? "dark" : "light"));
    },
    [dispatch],
  );

  return (
    <div>
      <ThemeSwitch checked={theme === "dark"} onChange={handleThemeChange} />
    </div>
  );
};

export default Settings;
