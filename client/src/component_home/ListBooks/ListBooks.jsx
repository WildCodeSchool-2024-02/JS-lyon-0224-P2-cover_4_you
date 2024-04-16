import PropTypes from "prop-types";
import BookCard from "./BookCard";
import styles from "./ListBooks.module.css";

function Books({ bookList }) {
  return (
    <div className={styles.homeBooks}>
      {Array.isArray(bookList) &&
        bookList.map((book) => {
          if (book) {
            return <BookCard key={book.title} book={book} />;
          }
          return null;
        })}
    </div>
  );
}

Books.propTypes = {
  bookList: PropTypes.arrayOf({
    isbn: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Books;