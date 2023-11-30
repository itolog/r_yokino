import { FC } from "react";

import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { NavigationOptions } from "@/types/navigation";

import AppNavLink from "@/ui/AppNavLink/AppNavLink.tsx";
import AppTooltip from "@/ui/AppTooltip/AppTooltip.tsx";

interface AppNavItemProps extends Omit<NavigationOptions, "id"> {
  open: boolean;
}

const AppNavItem: FC<AppNavItemProps> = ({ open, divider, to, tooltip, label, icon }) => {
  return (
    <AppTooltip placement={"right"} title={open ? "" : tooltip}>
      <ListItem disablePadding sx={{ display: "block" }}>
        <Link underline="none" component={AppNavLink} to={to}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              background: "inherit",
            }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}>
              {icon}
            </ListItemIcon>
            <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
        {divider && <Divider />}
      </ListItem>
    </AppTooltip>
  );
};

export default AppNavItem;
