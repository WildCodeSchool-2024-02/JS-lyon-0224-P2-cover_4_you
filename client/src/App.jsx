import {useState} from 'react';
import "./App.css";
import axios from "axios";
/* const sampleBook = {} */

function App() {
  const [bookTitle, setBookTitle] = useState("Title here")

  function getBook(){
    axios
      .get("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
      .then((response) => {setBookTitle(response.data.docs[9].title);})
      .catch((err) => console.error(err));

  }

  return (
    <>
    <p>{bookTitle}</p>
    <button type="button" onClick={getBook} >Click me</button>
    </>
  );
}

export default App;
