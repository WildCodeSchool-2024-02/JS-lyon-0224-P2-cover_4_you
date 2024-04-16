// CSS GLOBAL //
import "./App.module.css";
import Nav from "./component_home/Nav/Nav";
import Books from "./component_home/ListBooks/ListBooks";


function App() {
  return (
    <main>
      <header>
        <h1>Cover4You</h1>
        <Nav />
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
