import "./App.css";
import Books from "./component_accueil/ListBooks";
import "./component_accueil/ListBooks.css";

function App() {
  



  return (
    <main >
      <header>
        <h1>Cover4You</h1>
        <nav>NavBar</nav>
      </header>

      <section >
        <div>
          <Books/>
        </div>
      </section>

      <footer>
        <p>Footer</p>
      </footer>
    </main>
  );
}

export default App;
