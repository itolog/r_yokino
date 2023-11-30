import { FC } from "react";

import { Navigation } from "@/types/navigation/navigation.ts";
import AppNavLink from "@/ui/AppNavLink/AppNavLink.tsx";
import AppTooltip from "@/ui/AppTooltip/AppTooltip.tsx";

import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface AppNavItemProps extends Omit<Navigation, "divider"> {
  open: boolean;
}

const AppNavItem: FC<AppNavItemProps> = ({ open, to, tooltip, id, label, icon }) => {
  return (
    <AppTooltip placement={"right"} title={open ? "" : tooltip}>
      <ListItem disablePadding sx={{ display: "block" }}>
        <Link underline="none" component={AppNavLink} to={to} key={id}>
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
      </ListItem>
    </AppTooltip>
  );
};

export default AppNavItem;
