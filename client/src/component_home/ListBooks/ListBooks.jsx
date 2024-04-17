import PropTypes from "prop-types";
import BookCard from "./BookCard";
import styles from "./ListBooks.module.css";

function Books({ bookList }) {
  return (
    <div className={styles.homeBooks}>
      {Array.isArray(bookList) &&
        bookList.map((book) => <BookCard key={book.title} book={book} />)}
    </div>
  );
}

Books.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      isbn: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ).isRequired,
};

export default Books;
