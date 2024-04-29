import { useEffect, useState } from "react";
import axios from "axios";

import styles from "../ui_components/Loader.module.css";
import BookList from "../component_home/BookList/BookList";
import BookStyle from "../component_home/BookStyle/BookStyle";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [bookList, setBookList] = useState([]);

  const fetchBooks = async () => {
    const homeBooks = ["twilight", "harry+potter", "Musk", "Dune"];
    try {
      const requests = homeBooks.map((book) =>
        axios.get(`https://openlibrary.org/search.json?q=${book}`)
      );

      const responses = await Promise.all(requests);

      const fetchedBooks = responses.map((response) => response.data.docs[0]);
      setBookList(fetchedBooks);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      {isLoading === true && (
        <div className={styles.container}>
          <div className={styles.loader} />
        </div>
      )}
      <BookList bookList={bookList} />
      <BookStyle />
    </>
  );
}
