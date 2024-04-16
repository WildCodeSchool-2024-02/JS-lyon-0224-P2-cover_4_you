import { useLoaderData } from "react-router-dom";
import Books from "../component_home/ListBooks/ListBooks";
// import Footer from "../component_accueil/Footer/Footer";

export default function Home() {
  const bookList = useLoaderData("home");
  return (
    <>
      <Books bookList={bookList} />
      {/* <Footer /> */}
    </>
  );
}
