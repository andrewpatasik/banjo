import { Link } from "react-router-dom";
import {
  AdjusmentHorizontalIcon,
  HomeOutlineIcon,
  MagnifyingGlassIcon,
  PieChartIcon,
  UserRoundedIcon,
} from "../assets";
import PlusIcon from "../assets/PlusIcon";

const Navbar = () => {
  return (
    <div>
      {/* Topbar */}
      <nav className="sticky top-0 w-full flex justify-between p-3">
        <div>
          <h1 className="text-3xl">Banjoo</h1>
        </div>
        <ul className="flex items-center space-x-2">
          <li>
            <button className="flex items-center">
              <PlusIcon width="w-9 h-9" />
            </button>
          </li>
          <li>
            <Link to="/profile">
              <div className="flex flex-col items-center justify-center space-y-1">
                <UserRoundedIcon width="w-9 h-9" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bottombar */}
      <nav className="fixed bottom-0 w-full h-16">
        <ul className="flex space-x-2 flex items-center justify-evenly">
          <li>
            <Link to="/dashboard">
              <div className="flex flex-col items-center justify-center space-y-1">
                <HomeOutlineIcon width="w-6 h-6" />
                <span className="text-sm">Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/history">
              <div className="flex flex-col items-center justify-center space-y-1">
                <PieChartIcon width="w-6 h-6" />
                <span className="text-sm">History</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <div className="flex flex-col items-center justify-center space-y-1">
                <AdjusmentHorizontalIcon width="w-6 h-6" />
                <span className="text-sm">Settings</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
