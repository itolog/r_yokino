import { forwardRef } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import cl from "classnames";

const AppNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  return (
    <NavLink
      ref={ref}
      className={({ isActive, isPending }) => {
        return cl({
          active: isActive,
          pending: isPending,
        });
      }}
      {...props}
    />
  );
});

AppNavLink.displayName = "AppNavLink";
export default AppNavLink;
