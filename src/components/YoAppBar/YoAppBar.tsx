import { DRAWER_WIDTH } from "@/constants";

import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { getDrawerOpen } from "@/store/selectors.ts";
import { toggleDrawer } from "@/store/settings/settingsSlice.ts";

import classes from "./yoAppBar.module.scss";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const YoAppBar = () => {
  const dispatch = useAppDispatch();
  const drawerOpen = useAppSelector(getDrawerOpen);
  const handleDrawerOpen = () => {
    dispatch(toggleDrawer(true));
  };

  return (
    <AppBar
      classes={{
        root: classes.yoAppBar,
      }}
      position="fixed"
      open={drawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(drawerOpen && { display: "none" }),
          }}>
          <MenuIcon />
        </IconButton>
        <Typography fontFamily={"Vollkorn"} variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default YoAppBar;
