// CSS GLOBAL //
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./component_home/Nav/Nav";
import Footer from "./component_home/Footer/Footer";
import SearchBar from "./component_home/Nav/SearchBar";

function App() {
  return (
    <>
      <Nav />
      <SearchBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
