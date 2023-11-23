import { Link, Outlet } from "react-router-dom";

import classes from "./styles.module.scss";

const MainLayouts = () => {
  return (
    <div className={classes.mainLayout}>
      <div>
        <Link to="/">Movies</Link>
        <Link to="series">Series</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayouts;
