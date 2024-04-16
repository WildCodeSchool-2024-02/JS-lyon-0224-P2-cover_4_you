import PropTypes from "prop-types";
import styles from "./ListBooks.module.css";
import ButtonFavorite from "../ButtonFav/ButtonFav";

export default function BookCard({ book }) {
  function canDisplay(element) {
    return book !== null ? book[element] : "Loading...";
  }

  const isbnKey = book.isbn[0];

  return (
    <div className={styles.globalBook}>
      <h2 className={styles.titleBook}>{canDisplay("title")} </h2>
      <p className={styles.author}>Author : {canDisplay("author_name")} </p>
      <p>Year : {canDisplay("first_publish_year")}</p>

      <img
        src={`https://covers.openlibrary.org/b/ISBN/${isbnKey}-M.jpg`}
        alt=""
      />

      <div className={styles.button}>
        <button type="button">Customise</button>
        <button>
          <ButtonFavorite />
        </button>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
