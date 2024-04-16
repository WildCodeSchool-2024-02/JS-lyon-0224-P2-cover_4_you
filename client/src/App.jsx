// CSS GLOBAL //
import "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
