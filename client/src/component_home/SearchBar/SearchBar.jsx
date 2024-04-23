import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/result-page/:${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor="searchInput">Enter your search:</label>
      <input
        type="text"
        id="searchInput"
        value={query}
        className={styles.searchBar}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search by title, author, theme, etc."
      />
      <Link to={`/result-page/:${encodeURIComponent(query)}`}>Search</Link>
    </div>
  );
}
