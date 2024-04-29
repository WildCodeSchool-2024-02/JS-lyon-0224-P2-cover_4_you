// CSS GLOBAL //
import "./App.css";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Nav from "./component_home/Nav/Nav";
import SearchBar from "./component_home/SearchBar/SearchBar";
import Footer from "./component_home/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Slide
      />
    </>
  );
}

export default App;
