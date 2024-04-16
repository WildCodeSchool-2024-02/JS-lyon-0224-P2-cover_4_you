import { useLoaderData } from "react-router-dom";
import SearchBar from "../component_home/SearchBar/SearchBar";
import Books from "../component_home/ListBooks/ListBooks";
// import Footer from "../component_accueil/Footer/Footer";

export default function Home() {
  const bookList = useLoaderData("home");
  return (
    <>
      <SearchBar />
      <Books bookList={bookList} />
      {/* <Footer /> */}
    </>
  );
}
