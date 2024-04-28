import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./BookList.module.css";
import ButtonFavorite from "../ButtonFav/ButtonFav";

export default function BookCard({ book }) {
  function canDisplay(element) {
    return book !== null ? book[element] : "Loading...";
  }

  const isbnKey = book.isbn[0];

  return (
    <div className={styles.globalBook}>
      <h2 className={styles.titleBook}>{canDisplay("title")} </h2>
      <img
        src={`https://covers.openlibrary.org/b/ISBN/${isbnKey}-M.jpg`}
        alt={book.title}
      />
      <div className={styles.button}>
        <Link to={`/book-page/${isbnKey}`}>
          <button type="button">Customize</button>
        </Link>

        <ButtonFavorite />
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    isbn: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
