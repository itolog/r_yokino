import { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import cl from "classnames";

const AppNavLink: FC<NavLinkProps> = (props) => {
  return (
    <NavLink
      className={({ isActive, isPending }) => {
        return cl({
          active: isActive,
          pending: isPending,
        });
      }}
      {...props}
    />
  );
};

export default AppNavLink;
