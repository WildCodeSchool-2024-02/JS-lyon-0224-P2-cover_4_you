import { useState, useEffect } from "react";
import styles from "./BookStyle.module.css";

function BookStyle() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://openlibrary.org/search.json?q=ebook_access:[borrowable TO *] -key:"/works/OL38986W" author_key:(OL19441A)'
        );
        const data = await response.json();
        // Extraction URLs des couvertures des neuf premiers résultats.
        const covers =
          data?.docs
            ?.slice(0, 9)
            .map((book) =>
              book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                : ""
            ) || [];
        setImages(covers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getNextImages = () => {
    const nextImages = [];
    for (let i = 0; i < 3; i += 1) {
      nextImages.push(images[(currentIndex + i) % images.length]);
    }
    return nextImages;
  };

  return (
    <div className={styles.containerBook}>
      <p>
        <h2>Our personalizations</h2>
      </p>
      <div className={styles.imageContainer}>
        {getNextImages().map((image, index) => (
          <img
            key={index.id}
            src={image}
            alt={`livre${currentIndex + index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default BookStyle;
