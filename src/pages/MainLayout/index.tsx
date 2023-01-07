import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../../components";

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard")
  }, []);

  return (
    <div className="flex flex-col min-h-screen scrollbar-hide">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh_-_4rem)]">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
