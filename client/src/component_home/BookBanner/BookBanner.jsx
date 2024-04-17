import PropTypes from "prop-types";
import styles from "./BookBanner.module.css";

export default function BookBanner({ book }) {
  const isbnKey = book.isbn[0];

  function canDisplay(element) {
    return book !== null ? book[element] : "Loading...";
  }
  return (
    <div className={styles.bookBanner}>
      <img
        src={`https://covers.openlibrary.org/b/ISBN/${isbnKey}-S.jpg`}
        alt=""
      />
      <div>
        <h2>{canDisplay("title")}</h2>
        <p className={styles.author}>{canDisplay("author_name")} </p>
        <p>{canDisplay("first_publish_year")}</p>
        <p>{canDisplay("first_sentence")}</p>
      </div>
    </div>
  );
}

BookBanner.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
