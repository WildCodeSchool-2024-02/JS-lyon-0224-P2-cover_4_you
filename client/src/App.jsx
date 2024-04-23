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
      </header>
      <main>
        <SearchBar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
