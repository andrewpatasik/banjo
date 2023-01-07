import { Link, useLocation } from "react-router-dom";
import {
  AdjusmentHorizontalOutlineIcon,
  AdjusmentHorizontalSolidIcon,
  HomeOutlineIcon,
  HomeSolidIcon,
  PieChartOutlineIcon,
  PieChartSolidIcon,
  PlusCircleSolidIcon,
  UserRoundedIcon,
} from "../assets";
import NavigationLink from "./NavigationLink";

const extractSubRoute = (pathname: string): string => {
  const subroute = pathname.split("/")[1];

  return subroute !== "dashboard" ? subroute : "Banjo";
};

const Navbar = () => {
  const { pathname } = useLocation();

  const subroute = extractSubRoute(pathname);

  return (
    <div>
      {/* Topbar */}
      <nav className="sticky top-0 w-full flex items-center justify-between p-3">
        <div>
          <h1
            className={`${
              subroute === "Banjo" ? "text-4xl font-logo" : "text-3xl capitalize font-bold"
            }`}
          >
            {subroute}
          </h1>
        </div>
        {subroute === "Banjo" ? 
        <ul className="flex items-center space-x-3">
          <li>
            <button className="flex items-center">
              <PlusCircleSolidIcon width="w-9 h-9" />
            </button>
          </li>
          <li>
            <Link to="/profile">
              <div className="flex flex-col items-center justify-center space-y-1">
                <UserRoundedIcon width="w-12 h-12" />
              </div>
            </Link>
          </li>
        </ul> : <></> }
      </nav>

      {/* Bottombar */}
      <nav className="fixed bottom-0 w-full h-16">
        <ul className="h-full flex space-x-2 flex items-center justify-evenly">
          <li>
            <NavigationLink
              to="/dashboard"
              activeIcon={
                <div className="flex flex-col items-center justify-center space-y-1">
                  <HomeSolidIcon width="w-6 h-6" />
                  <span className="text-sm">Dashboard</span>
                </div>
              }
              inactiveIcon={
                <div className="flex flex-col items-center justify-center space-y-1">
                  <HomeOutlineIcon width="w-6 h-6" />
                  <span className="text-sm">Dashboard</span>
                </div>
              }
            ></NavigationLink>
          </li>
          <li>
            <NavigationLink
              to="/history"
              activeIcon={
                <div className="flex flex-col items-center justify-center space-y-1">
                  <PieChartSolidIcon width="w-6 h-6" />
                  <span className="text-sm">History</span>
                </div>
              }
              inactiveIcon={
                <div className="flex flex-col items-center justify-center space-y-1">
                  <PieChartOutlineIcon width="w-6 h-6" />
                  <span className="text-sm">History</span>
                </div>
              }
            ></NavigationLink>
          </li>
          <li>
            <NavigationLink
              to="/settings"
              activeIcon={
                <div className="flex flex-col items-center justify-center space-y-1">
                  <AdjusmentHorizontalSolidIcon width="w-6 h-6" />
                  <span className="text-sm">Settings</span>
                </div>
              }
              inactiveIcon={
                <div className="flex flex-col items-center justify-center space-y-1">
                  <AdjusmentHorizontalOutlineIcon width="w-6 h-6" />
                  <span className="text-sm">Settings</span>
                </div>
              }
            ></NavigationLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
