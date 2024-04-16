import { useLoaderData } from "react-router-dom";
import Nav from "../component_accueil/Nav/Nav";
import Books from "../component_accueil/ListBooks/ListBooks";
// import Footer from "../component_accueil/Footer/Footer";

export default function Home() {
  const bookList = useLoaderData("home");
  return (
    <>
      <Nav />
      <Books bookList={bookList} />
      {/* <Footer /> */}
    </>
  );
}
