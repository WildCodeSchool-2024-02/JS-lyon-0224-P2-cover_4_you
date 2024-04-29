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

  const extract = book !== null ? book.first_sentence : "Loading...";
  const maxLength = 1;
  const truncatedExtract =
    extract.length > maxLength ? `${extract.slice(0, maxLength)}...` : extract;

  const [extractDisplay, setExtractDisplay] = useState(true);
  const displayText = extractDisplay === true ? truncatedExtract : extract;

  function renderStarRating(averageRating) {
    const numberOfStars = Math.round(averageRating);
    const stars = [];

    for (let i = 0; i < 5; i += 1) {
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
        <h1>Customize your book</h1>
        {book !== null && (
          <div>
            <h2 className={Styles.bookTitle}>{book.title}</h2>
            <div className={Styles.BookSelect}>
              <img src={imageSrc} alt="book cover" id="bookCover" />
              <div className={Styles.ContainerBook}>
                <p>
                  <strong>Author :</strong> {canDisplay("author_name")}{" "}
                </p>
                <p>
                  <strong>Year :</strong> {canDisplay("first_publish_year")}
                </p>
                <p>
                  <strong>Pages :</strong>{" "}
                  {canDisplay("number_of_pages_median")}
                </p>
              </div>

              <div className={Styles.RatingsBook}>
                <div className={Styles.Ratings}>
                  <p>
                    <strong>Ratings</strong>
                  </p>
                  <p>
                    <strong>
                      {canDisplay("ratings_average").toFixed(1)}/5
                    </strong>
                  </p>
                  <p>
                    {renderStarRating(canDisplay("ratings_average").toFixed(1))}
                  </p>
                  <p>{canDisplay("ratings_count")} count</p>
                </div>
                <div className={Styles.Stars}>
                  <p>
                    5
                    <meter
                      min="0"
                      max={canDisplay("ratings_count")}
                      value={canDisplay("ratings_count_5")}
                    />
                  </p>
                  <p>
                    4
                    <meter
                      min="0"
                      max={canDisplay("ratings_count")}
                      value={canDisplay("ratings_count_4")}
                    />
                  </p>
                  <p>
                    3
                    <meter
                      min="0"
                      max={canDisplay("ratings_count")}
                      value={canDisplay("ratings_count_3")}
                    />
                  </p>
                  <p>
                    2
                    <meter
                      min="0"
                      max={canDisplay("ratings_count")}
                      value={canDisplay("ratings_count_2")}
                    />
                  </p>
                  <p>
                    1
                    <meter
                      min="0"
                      max={canDisplay("ratings_count")}
                      value={canDisplay("ratings_count_1")}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h3 className={Styles.titleExtract}>Extract :</h3>
        <p className={Styles.displayText}>
          {displayText}
          <button
            className={Styles.buttonDisplay}
            type="button"
            onClick={() => setExtractDisplay(!extractDisplay)}
          >
            {extractDisplay === true ? "Read more" : "See less"}
          </button>
        </p>
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
