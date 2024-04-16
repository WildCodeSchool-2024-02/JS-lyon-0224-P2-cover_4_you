import { useId } from 'react';
import styles from "./SearchBar.module.css";

export default function SearchBar(){
    const bookSearchId = useId();
    return(
        <>
        <label htmlFor={bookSearchId}>Search a book:</label>
            <input 
                className={styles.searchBar} 
                type="text"
                id={bookSearchId} 
                placeholder="Search a book by title, author, theme, etc." 
            />
            
        <button type="button"> SEARCH </button>
        </>
    )
}