import { useState, useEffect } from 'react';
import "./App.css";
import axios from "axios";

function App() {
  const [bookTitle, setBookTitle] = useState(null)

  useEffect(() => {
    async function startFetching() {
      try{
      const response = await axios.get("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
      setBookTitle(response.data.docs[9].title);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    startFetching();
  });


  return (
    <>
    <h1>Cover4You</h1>
    <p>{bookTitle ?? 'Loading...'}</p>
    </>
  );
}

export default App;
