import { Link } from "react-router-dom";
import {
  AdjusmentHorizontalOutlineIcon,
  AdjusmentHorizontalSolidIcon,
  CalendarMicroIcon,
  HomeOutlineIcon,
  HomeSolidIcon,
  PieChartOutlineIcon,
  PieChartSolidIcon,
  UserRoundedIcon,
} from "../assets";
import NavigationLink from "./NavigationLink";

const Navbar = () => {
  return (
    <div>
      {/* Topbar */}
      <nav className="sticky top-0 w-full py-6 flex justify-between items-center p-3">
        <div>
          <div className="w-16 h-16 bg-indigo-400 rounded-lg"></div>
        </div>

        <ul className="flex items-center space-x-3">
          <li>
            <Link to="/profile">
              <div className="flex flex-col items-center justify-center space-y-1">
                <UserRoundedIcon className="w-16 h-16" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bottombar */}
      <nav className="fixed bottom-0 w-full py-4 z-10 bg-gray-50">
        <ul className="flex space-x-2 items-center justify-evenly">
          <li>
            <NavigationLink
              to="/dashboard"
              activeIcon={
                <div className="flex flex-col items-center justify-center space-y-1">
                  <HomeSolidIcon width="w-6 h-6" />
                  <span className="text-sm">Home</span>
                </div>
              }
              inactiveIcon={
                <div className="flex flex-col items-center justify-center space-y-1">
                  <HomeOutlineIcon width="w-6 h-6" />
                  <span className="text-sm">Home</span>
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
