import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

const MainLayout = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
