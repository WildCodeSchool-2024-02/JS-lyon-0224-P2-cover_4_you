import PropTypes from 'prop-types';
import styles from "./ListBooks.module.css"

export default function BookCard({book}){

    function canDisplay(element) {
        return book !== null ? book[element] : 'Loading...';
    }

    const isbnKey = book.isbn[0];

    return(
        <div className={styles.globalBook}>
        <p className={styles.titleBook}>{canDisplay('title')} </p>
        <p className={styles.author}>{canDisplay('author_name')} </p>
  
        <img src={`https://covers.openlibrary.org/b/ISBN/${isbnKey}-M.jpg`} alt='' />
  
        <p>{canDisplay('first_publish_year')}</p>
        <button type="button">✏️</button>
      </div>
    );
}

BookCard.propTypes = {
    book: PropTypes.shape({
        isbn: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
}

