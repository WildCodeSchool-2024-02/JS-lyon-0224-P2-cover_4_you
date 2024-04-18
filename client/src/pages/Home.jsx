import { useLoaderData } from "react-router-dom";
import BookList from "../component_home/BookList/BookList";

export default function Home() {
  const bookList = useLoaderData("home");
  return <BookList bookList={bookList} />;
}
