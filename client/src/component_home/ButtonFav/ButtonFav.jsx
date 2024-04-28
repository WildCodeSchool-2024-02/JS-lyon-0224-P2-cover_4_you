import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./ButtonFav.module.css";

function ButtonFavorite() {
  const [favorite, setFavorite] = useState(false);

  const notifySuccess = (action) => {
    if (action === "add") {
      toast.success("Added to favourites ! ⭐", {
        className: styles.customToast,
      });
    } else if (action === "remove") {
      toast.error("Favourite deleted ! ❌", {
        className: styles.customToast,
      });
    }
  };

  return (
    <button
      type="button"
      className={`${styles.icon} ${favorite === true ? styles.isFavorite : ""}`}
      onClick={() => {
        if (favorite === true) {
          notifySuccess("remove");
        } else {
          notifySuccess("add");
        }
        setFavorite(!favorite);
      }}
    >
      &#x2605;
    </button>
  );
}

export default ButtonFavorite;
