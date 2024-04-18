// CSS GLOBAL //
import "./App.module.css";
import { Outlet } from "react-router-dom";
import Nav from "./component_home/Nav/Nav";
import SearchBar from "./component_home/SearchBar/SearchBar";
import Footer from "./component_home/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Nav />
        <SearchBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
