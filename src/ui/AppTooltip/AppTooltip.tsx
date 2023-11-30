import { FC, ReactElement } from "react";

import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

interface AppTooltipProps extends TooltipProps {
  children: ReactElement;
}

const AppTooltip: FC<AppTooltipProps> = ({ children, arrow = true, ...props }) => {
  return (
    <Tooltip arrow={arrow} {...props}>
      {children}
    </Tooltip>
  );
};

export default AppTooltip;
