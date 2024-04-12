// CSS GLOBAL //
import "./App.module.css";
import Nav from "./component_accueil/Nav/Nav";
import Books from "./component_accueil/ListBooks/ListBooks";

function App() {
  return (
    <main>
      <header>
        <Nav/>
      </header>

      <section>
        <div>
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
