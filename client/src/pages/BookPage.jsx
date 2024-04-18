import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./BookPage.module.css";

function BookPage() {
  const { isbn } = useParams("page-book");
  const [book, setBook] = useState(null);

  function canDisplay(element) {
    return book !== null ? book[element] : "Loading...";
  }

  useEffect(() => {
    try {
      axios
        .get(`https://openlibrary.org/search.json?q=${isbn}`)
        .then((response) => {
          setBook(response.data.docs.slice(0, 1)[0]);
        });
    } catch (error) {
      console.error("Error feeching data:", error);
    }
  }, []);

  return (
    <main>
      <div>
        <h1>Customise your book</h1>
        {book !== null && (
          <div>
            <h2>{book.title}</h2>
            <div className={styles.BookSelect}>
              <img
                src={`https://covers.openlibrary.org/b/ISBN/${isbn}-M.jpg`}
                alt="cover book"
              />
              <p className={styles.author}>
                Author : {canDisplay("author_name")}{" "}
              </p>
              <p>Year : {canDisplay("first_publish_year")}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <h3>Synopsis :</h3>
        <p>...</p>
      </div>
      <div>
        <Link to="/">
          <button type="button">Return Home</button>
        </Link>
      </div>
    </main>
  );
}

export default BookPage;
