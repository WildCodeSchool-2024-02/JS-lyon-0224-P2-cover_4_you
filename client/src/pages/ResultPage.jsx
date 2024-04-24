import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookBanner from "../component_home/BookBanner/BookBanner";

export default function ResultPage() {
  const { userQuery } = useParams();
  const [bookResult, setBookResult] = useState([]);
  useEffect(() => {
    setBookResult([]);
    try {
      axios
        .get(`https://openlibrary.org/search.json?q=${userQuery}`)
        .then((result) => setBookResult(result.data.docs.slice(0, 5)));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [userQuery]);
  return (
    <>
      <h1>Results for "{userQuery.slice(1)}"</h1>
      {bookResult.map((book) => (
        <BookBanner key={book.title} book={book} />
      ))}
    </>
  );
}
