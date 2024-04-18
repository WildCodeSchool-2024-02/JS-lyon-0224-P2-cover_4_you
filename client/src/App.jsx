// CSS GLOBAL //
import "./App.module.css";
import { Outlet } from "react-router-dom";
import Nav from "./component_home/Nav/Nav";
import Footer from "./component_home/Footer/Footer";
import BookStyle from "./component_home/BookStyle/BookStyle";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <BookStyle />
      <Footer />
    </>
  );
}

export default App;
