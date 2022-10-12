import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  useEffect(() => {
    document.title = "Banjoo";
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
