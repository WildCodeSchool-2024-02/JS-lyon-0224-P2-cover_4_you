import PropTypes from "prop-types";
import BookCard from "./BookCard";
import styles from "./BookList.module.css";

function BookList({ bookList }) {
  return (
    <div className={styles.homeBooks}>
      {Array.isArray(bookList) === true &&
        bookList.map((book) => <BookCard key={book.title} book={book} />)}
    </div>
  );
}

BookList.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      isbn: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ).isRequired,
};

export default BookList;
