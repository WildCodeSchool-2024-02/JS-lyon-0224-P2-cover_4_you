import styles from "./BookStyle.module.css";

function BookStyle() {
  return (
    <section className={styles.BookStyle}>
      <div>
        <img src="src/assets/fonts/pictures-books/book1.jpg" alt="livre1" />
      </div>
      <div>
        <img src="src/assets/fonts/pictures-books/book2.jpg" alt="livre2" />
      </div>
      <div>
        <img src="src/assets/fonts/pictures-books/book3.jpg" alt="livre3" />
      </div>
    </section>
  );
}

export default BookStyle;
