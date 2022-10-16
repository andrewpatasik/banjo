import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  useEffect(() => {
    document.title = "Banjo | Budgeting Companion";
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
