import { useMemo } from "react";

import { Navigation, NavigationProps } from "@/types/navigation/navigation.ts";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

const useNavigation = (): NavigationProps => {
  const options: Navigation[] = useMemo(() => {
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
