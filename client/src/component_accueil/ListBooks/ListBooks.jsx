import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function Books() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const homeBooks = [
      "the+lord+of+the+rings",
      "harry+potter",
      "dragon+ball+z",
      "l%27%C3%A9tranger",
    ]

      const fetchBooks = async () => {
        try {
          const responses = await Promise.all(
            homeBooks.map((book) =>
              axios.get(`https://openlibrary.org/search.json?q=${book}`)
            )
          );
    
          const newBookList = responses.map((response) => response.data.docs[0]);
          setBookList(newBookList);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchBooks();
    }, []);

  return (
    <div>
    {Array.isArray(bookList) && bookList.map((book) => {
      if(book){
        return <BookCard key={book.title} book={book} />}
      return null;
    })}
  </div>
  )
}

export default Books;
