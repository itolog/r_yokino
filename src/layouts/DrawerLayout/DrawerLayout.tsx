import { Outlet } from "react-router-dom";

import { DRAWER_WIDTH } from "@/constants";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { CSSObject, styled, Theme } from "@mui/material/styles";

import useNavigation from "@/layouts/DrawerLayout/hooks/useNavigation.tsx";

import AppNavItem from "@/ui/AppNavItem/AppNavItem.tsx";

import Settings from "@/components/Settings/Settings.tsx";
import YoAppBar from "@/components/YoAppBar/YoAppBar.tsx";

import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { getDrawerOpen } from "@/store/selectors.ts";
import { toggleDrawer } from "@/store/settings/settingsSlice.ts";

import classes from "./drawerLayout.module.scss";

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerLayout = () => {
  const dispatch = useAppDispatch();
  const drawerOpen = useAppSelector(getDrawerOpen);

  const { options } = useNavigation();

  const handleDrawerClose = () => {
    dispatch(toggleDrawer(false));
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "var(--app-bg)" }}>
      <YoAppBar />
      <Drawer
        classes={{
          root: classes.drawerRoot,
          paper: classes.drawerContent,
        }}
        variant="permanent"
        open={drawerOpen}>
        <DrawerHeader className={classes.drawerHeader}>
          <Settings />
          <IconButton
            classes={{
              root: classes.chevronLeftIcon,
            }}
            onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {options.map(({ id, ...props }) => (
            <AppNavItem key={id} {...props} open={drawerOpen} />
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DrawerLayout;
