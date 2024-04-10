import { useState, useEffect } from 'react';
import "./App.css";
import Books from "./component_accueil/ListBooks";
import "./component_accueil/ListBooks.css";
import axios from "axios";
import "./CharteGraphique.css";

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
    <main >
      <header>
        <h1>Cover4You</h1>
        <nav>NavBar</nav>
      </header>

      <section >
        <div>
    <p>{bookTitle ?? 'Loading...'}</p>
          <Books />
        </div>
      </section>

      <footer>
        <p>Footer</p>
      </footer>
    </main>
  );
}

export default App;
