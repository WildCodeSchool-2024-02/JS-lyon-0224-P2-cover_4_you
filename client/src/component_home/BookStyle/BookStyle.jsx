import { useState, useEffect } from "react";
import styles from "./BookStyle.module.css";

function BookStyle() {
  const [images, setImages] = useState([]);
  const [prices, setPrices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://openlibrary.org/search.json?q=ebook_access:[borrowable TO *] -key:"/works/OL38986W" author_key:(OL19441A)'
        );
        const data = await response.json();
        // Extraction des URLs des couvertures des neuf premiers résultats.
        const covers =
          data?.docs
            ?.slice(0, 9)
            .map((book) =>
              book.cover_i !== null
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                : ""
            ) || [];
        setImages(covers);

        // Génération de prix aléatoires entre 5 et 11 euros pour chaque livre
        const bookPrices = covers.map(
          () => Math.floor(Math.random() * (11 - 5 + 1)) + 5
        );
        setPrices(bookPrices);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getNextImages = () => {
    const nextImages = [];
    for (let i = 0; i < 4; i += 1) {
      nextImages.push({
        image: images[(currentIndex + i) % images.length],
        price: prices[(currentIndex + i) % prices.length],
      });
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
          <div key={index.length} className={styles.book}>
            <img src={book.image} alt={`livre${currentIndex + index + 1}`} />
            <p>{`Price: ${book.price} €`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookStyle;
