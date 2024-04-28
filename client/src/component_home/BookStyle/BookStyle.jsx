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
        // Extraction des neuf premiers résultats avec couverture et prix fictif
        const books =
          data?.docs
            ?.slice(0, 9)
            .map((book) => ({
              coverUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : "",
              price: Math.floor(Math.random() * (11 - 5 + 1)) + 5
            })) || [];
        setImages(books);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getNextImages = () => {
    const nextImages = [];
    for (let i = 0; i < 4; i += 1) {
      nextImages.push(images[(currentIndex + i) % images.length]);
    }
    return nextImages;
  };

  return (
    <div className={styles.containerBook}>
      <p className={styles.paragraph}>
        <h2 className={styles.colorTitle}>Find your favorite book covers</h2>
      </p>
      <div className={styles.imageContainer}>
        {getNextImages().map((book, index) => (
          <div key={index.id} className={styles.book}>
            <img src={book.coverUrl} alt={`livre${currentIndex + index + 1}`} />
            <p>{`Price: ${book.price} euros`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookStyle;
