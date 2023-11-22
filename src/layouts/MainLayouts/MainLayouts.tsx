import { Link, Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <Link to="/">Movies</Link>
        <Link to="series">Series</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayouts;
