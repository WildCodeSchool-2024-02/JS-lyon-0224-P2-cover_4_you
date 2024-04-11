import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

function Books() {

  const [bookList, setBookList] = useState([])

  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      if (!ignore) {
        try {
          await axios.get("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
            .then((response) => {
              setBookList([response.data.docs[0]])
            });
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


  return (
    bookList.map(book => (<BookCard key={book.id_librarything[0]} book={book} />)
  ));
}

export default Books