import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Styles from "./BookPage.module.css";

function BookPage() {
  const notifySuccess = () =>
    toast.success(" Order completed ! 💳 ", {
      className: Styles.customToast,
    });

  const { isbn } = useParams("page-book");
  const [book, setBook] = useState(null);
  const [imageSrc, setImageSrc] = useState(
    `https://covers.openlibrary.org/b/ISBN/${isbn}-M.jpg`
  );

  function canDisplay(element) {
    return book !== null ? book[element] : "Loading...";
  }

  useEffect(() => {
    try {
      axios
        .get(`https://openlibrary.org/search.json?q=${isbn}`)
        .then((response) => {
          setBook(response.data.docs.slice(0, 1)[0]);
        });
    } catch (error) {
      console.error("Error feeching data:", error);
    }
  }, []);

  function displayImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function changeImg(e) {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  }

  const maxLength = 2;
  const synopsis = book !== null ? book.first_sentence : "Loading...";
  const truncatedSynopsis =
    synopsis.length > maxLength
      ? `${synopsis.slice(0, maxLength)}...`
      : synopsis;

  function renderStarRating(averageRating) {
    const numberOfStars = Math.round(averageRating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < numberOfStars) {
        stars.push(<span key={i}>&#9733;</span>);
      } else {
        stars.push(<span key={i}>&#9734;</span>);
      }
    }

    return stars;
  }

  return (
    <main>
      <div>
        <h1>Customise your book</h1>
        {book !== null && (
          <div>
            <h2>{book.title}</h2>
            <img src={imageSrc} alt="book cover" id="bookCover" />
            <div className={Styles.BookSelect}>
              <div className={Styles.ContainerBook}>
                <p>Author : {canDisplay("author_name")} </p>
                <p>Year : {canDisplay("first_publish_year")}</p>
                <p>Number of pages : {canDisplay("number_of_pages_median")}</p>
              </div>
              <div className={Styles.RatingsBook}>
                <h3>Note et avis</h3>
                <p>Moyenne avis:{canDisplay("ratings_average").toFixed(2)}</p>
                <p>
                  Évaluation : {renderStarRating(canDisplay("ratings_average"))}
                </p>

                <p>Nombre d'avis:{canDisplay("ratings_count")}</p>
                <p>
                  5 star
                  <meter
                    min="0"
                    max={canDisplay("ratings_count")}
                    value={canDisplay("ratings_count_5")}
                  />
                </p>
                <p>
                  4 star
                  <meter
                    min="0"
                    max={canDisplay("ratings_count")}
                    value={canDisplay("ratings_count_4")}
                  />
                </p>
                <p>
                  3 star
                  <meter
                    min="0"
                    max={canDisplay("ratings_count")}
                    value={canDisplay("ratings_count_3")}
                  />
                </p>
                <p>
                  2 star
                  <meter
                    min="0"
                    max={canDisplay("ratings_count")}
                    value={canDisplay("ratings_count_2")}
                  />
                </p>
                <p>
                  1 star
                  <meter
                    min="0"
                    max={canDisplay("ratings_count")}
                    value={canDisplay("ratings_count_1")}
                  />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h3>Extract :</h3>
        <p>{truncatedSynopsis}</p>
      </div>

      <div className={Styles.BookCover}>
        <label htmlFor="userCover">
          <button
            type="button"
            onClick={() => document.getElementById("userCover").click()}
          >
            Import your cover
          </button>
          <input
            type="file"
            id="userCover"
            name="userCover"
            onChange={displayImage}
            accept="image/*"
          />
        </label>
        <div>
          <button type="button" onClick={notifySuccess}>
            Order
          </button>
        </div>
      </div>
    </main>
  );
}

export default BookPage;
