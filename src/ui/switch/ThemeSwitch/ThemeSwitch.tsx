import { FC } from "react";

import { Switch, SwitchProps } from "@mui/material";

import classes from "./themeSwitch.module.scss";

const ThemeSwitch: FC<SwitchProps> = (props) => {
  return (
    <Switch
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        checked: classes.checked,
        thumb: classes.thumb,
        track: classes.track,
      }}
      {...props}
    />
  );
};

export default ThemeSwitch;
