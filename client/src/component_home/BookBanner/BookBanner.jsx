import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./BookBanner.module.css";
import ButtonFav from "../ButtonFav/ButtonFav";

export default function BookBanner({ book, setIsLoading }) {
  const isbnKey = book.isbn[0];
  const [bookCover, setBookCover] = useState("");

  function canDisplay(element) {
    return book !== null ? book[element] : "Loading...";
  }
  useEffect(() => {
    function fetchCover() {
      setIsLoading(true);
      fetch(`https://covers.openlibrary.org/b/ISBN/${isbnKey}-M.jpg`)
        .then((response) => response.blob())
        .then((blob) => setBookCover(URL.createObjectURL(blob)))
        .finally(setIsLoading(false));
    }
    fetchCover();
  });
  return (
    <div className={styles.bookBanner}>
      <img src={bookCover} alt={book.title} />
      <h2 className={styles.title}>{canDisplay("title")}</h2>
      <p className={styles.author}>{canDisplay("author_name")} </p>
      <p className={styles.year}>{canDisplay("first_publish_year")}</p>
      <div className={styles.extract}>
        <p className={styles.extractText}>{canDisplay("first_sentence")}</p>
      </div>
      <div className={styles.buttonFav}>
        <ButtonFav />
      </div>
      <Link className={styles.buttonCustom} to={`/book-page/${isbnKey}`}>
        <button type="button">Customize</button>
      </Link>
    </div>
  );
}

BookBanner.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
  setIsLoading: PropTypes.func.isRequired,
};
