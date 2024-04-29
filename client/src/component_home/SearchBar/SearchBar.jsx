import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (query.trim().length > 0) {
        navigate(`/result-page/:${encodeURIComponent(query)}`);
        setQuery("");
      } else {
        event.preventDefault();
      }
    }
  };

  const handleSubmit = (event) => {
    if (query.trim().length === 0) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        id="searchInput"
        value={query}
        className={styles.searchBar}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search by title, author, theme, etc."
        minLength={10}
      />
      <Link
        to={`/result-page/:${encodeURIComponent(query)}`}
        onClick={handleSubmit}
      >
        &#128270;
      </Link>
    </div>
  );
}
