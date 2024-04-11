import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./ListBooks.module.css";


function Books() {

  const [bookTitle, setBookTitle] = useState(null)
  const [image, setImage] = useState(null)
  const [isbnCode, setIsbnCode] = useState(null)


  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      if (!ignore) {
        try {
          await axios.get("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
            .then((response) => {
              setBookTitle(response.data.docs[0])
              setIsbnCode(response.data.docs[0].isbn[0])
            });

          // ici
          await axios.get("https://covers.openlibrary.org/b/ISBN/9780739408254-M.jpg")
            .then((response) => {
              console.log(response);
              setImage(response)
            });
          // ici


        }
        catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    startFetching();
    return () => {
      ignore = true;
    }
  }, []);

  function canDisplay(element) {
    return bookTitle !== null ? bookTitle[element] : 'Loading...';
  }
  return (

    <div className={styles.globalBook}>
      <p className={styles.titleBook}>{canDisplay('title')} </p>
      <p className={styles.author}>{canDisplay('author_name')} </p>

      <img src='https://covers.openlibrary.org/b/ISBN/9780739408254-M.jpg' alt='' />

      <p>{canDisplay('first_publish_year')}</p>
      <button type="button">Customise</button>
    </div>
  );
}

export default Books