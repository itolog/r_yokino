import { useMemo } from "react";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

import { NavigationOptions, NavigationProps } from "@/types/navigation";

const useNavigation = (): NavigationProps => {
  const options: NavigationOptions[] = useMemo(() => {
    return [
      {
        id: 1,
        label: "Movies",
        icon: <LocalMoviesIcon />,
        to: "/",
        tooltip: "Movies",
      },
      {
        id: 2,
        label: "Series",
        icon: <LiveTvIcon />,
        to: "series",
        tooltip: "Series",
      },
    ];
  }, []);

  return {
    options,
  };
};

export default useNavigation;
