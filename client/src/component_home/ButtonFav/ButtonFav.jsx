import { useState } from "react";
import styles from "./ButtonFav.module.css";

function ButtonFavorite() {
  const [favorite, setFavorite] = useState(false);

  return (
    <div>
      <span
        className={`${styles.icon} ${favorite ? styles.isFavorite : ""}`}
        onClick={() => {
          const newFavoriteValue = !favorite;
          setFavorite(newFavoriteValue);
        }}
      >
        &#x2605;
      </span>
    </div>
  );
}

export default ButtonFavorite;
