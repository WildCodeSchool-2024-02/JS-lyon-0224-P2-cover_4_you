import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <label htmlFor="searchInput">Enter your search:</label>
      <input
        type="text"
        id="searchInput"
        value={query}
        className={styles.searchBar}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title, author, theme, etc."
      />
      <Link to={`/result-page/:${encodeURIComponent(query)}`}>Search</Link>
    </div>
  );
}
