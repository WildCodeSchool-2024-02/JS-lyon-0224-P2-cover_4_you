import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookBanner from "../component_home/BookBanner/BookBanner";
import styles from "../ui_components/Loader.module.css";

export default function ResultPage() {
  const { userQuery } = useParams();
  const [bookResult, setBookResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading === true && (
        <div className={styles.container}>
          <div className={styles.loader} />
        </div>
      )}
      {bookResult.map((book) => (
        <BookBanner key={book.title} book={book} setIsLoading={setIsLoading} />
      ))}
    </>
  );
}
