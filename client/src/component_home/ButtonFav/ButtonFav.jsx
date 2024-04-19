import { useState } from "react";
import styles from "./ButtonFav.module.css";

function ButtonFavorite() {
  const [favorite, setFavorite] = useState(false);

  return (
    <button
      type="button"
      className={`${styles.icon} ${favorite === true ? styles.isFavorite : ""}`}
      onClick={() => {
        setFavorite(!favorite);
      }}
    >
      &#x2605;
    </button>
  );
}

export default ButtonFavorite;
