import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./BookPage.module.css";

function BookPage() {
  const { isbn } = useParams("page-book");
  const [book, setBook] = useState(null);
  const [imageSrc, setImageSrc] = useState(
    `https://covers.openlibrary.org/b/ISBN/${isbn}-M.jpg`
  );

  function canDisplay(element) {
    return book !== null ? book[element] : "Loading...";
  }

  useEffect(() => {
    try {
      axios
        .get(`https://openlibrary.org/search.json?q=${isbn}`)
        .then((response) => {
          setBook(response.data.docs.slice(0, 1)[0]);
        });
    } catch (error) {
      console.error("Error feeching data:", error);
    }
  }, []);

  function displayImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function changeImg(e) {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <main>
      <div>
        <h1>Customise your book</h1>
        {book !== null && (
          <div>
            <h2>{book.title}</h2>
            <div className={styles.BookSelect}>
              <img src={imageSrc} alt="book cover" id="bookCover" />
              <p className={styles.author}>
                Author : {canDisplay("author_name")}{" "}
              </p>
              <p>Year : {canDisplay("first_publish_year")}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <h3>Synopsis :</h3>
        <p>...</p>
      </div>
      <label htmlFor="userCover">Choose your own cover :</label>
      <input
        type="file"
        id="userCover"
        name="userCover"
        onChange={displayImage}
        accept="image/*"
      />
      <div>
        <Link to="/">
          <button type="button">Return Home</button>
        </Link>
      </div>
    </main>
  );
}

export default BookPage;
