import { useLoaderData } from "react-router-dom";
import Books from "../component_home/ListBooks/ListBooks";

export default function Home() {
  const bookList = useLoaderData("home");
  return <Books bookList={bookList} />;
}
