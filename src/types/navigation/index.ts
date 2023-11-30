import { ReactElement } from "react";

export interface NavigationOptions {
  id: number;
  icon: ReactElement;
  label: string;
  to: string;
  divider?: boolean;
  tooltip?: string;
}

export interface NavigationProps {
  options: NavigationOptions[];
}
