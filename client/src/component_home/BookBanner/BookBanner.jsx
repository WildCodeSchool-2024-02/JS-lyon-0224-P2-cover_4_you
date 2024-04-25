import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./BookBanner.module.css";
import ButtonFav from "../ButtonFav/ButtonFav";
import BookSynopsis from "../BookSynopsis/BookSynopsis";

export default function BookBanner({ book }) {
  const isbnKey = book.isbn[0];

  function canDisplay(element) {
    return book !== null ? book[element] : "Loading...";
  }
  return (
    <div className={styles.bookBanner}>
      <img
        src={`https://covers.openlibrary.org/b/ISBN/${isbnKey}-M.jpg`}
        alt={book.title}
      />
      <h2 className={styles.title}>{canDisplay("title")}</h2>
      <p className={styles.author}>{canDisplay("author_name")} </p>
      <p className={styles.year}>{canDisplay("first_publish_year")}</p>
      <div className={styles.synopsis}>
        <BookSynopsis />
      </div>
      <div className={styles.buttonFav}>
        <ButtonFav />
      </div>
      <Link className={styles.buttonCustom} to={`/book-page/${isbnKey}`}>
        <button type="button">Customise</button>
      </Link>
    </div>
  );
}

BookBanner.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
};
