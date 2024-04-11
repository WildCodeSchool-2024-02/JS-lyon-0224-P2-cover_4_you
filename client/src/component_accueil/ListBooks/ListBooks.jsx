import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./ListBooks.module.css";


function Books() {

  const [bookTitle, setBookTitle] = useState(null)

  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      if (!ignore) {
      try{
      await axios.get("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
      .then((response) => {
        setBookTitle(response.data.docs[0])});
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }}
    }
    startFetching();
    return () => {
      ignore = true;
    }
  }, []);

  function canDisplay(element){
    return bookTitle !== null? bookTitle[element] : 'Loading...';
  }

  return (

    <div className={styles.globalBook}>
      <p className={styles.titleBook}>{canDisplay('title')} </p> 
      <p className='author'>{canDisplay('author_name')} </p>
      <img alt='' src='https://media.discordapp.net/attachments/1224365307125170207/1227190331095908352/Patient-0-book.png?ex=6627810f&is=66150c0f&hm=3774d4693929db84eb632142fa8f15ae4fd2e789bd196099815d490cf8d193be&=&format=webp&quality=lossless&width=512&height=662' width="150px"/>
      <p>{canDisplay('first_publish_year')}</p>
      <button type="button">✏️</button>
    </div>
  );
}

export default Books