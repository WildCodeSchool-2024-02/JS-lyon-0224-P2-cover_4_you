import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BookPage() {
  const { isbn } = useParams("page-book");
  const [book, setBook] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(`https://openlibrary.org/search.json?q=${isbn}`)
        .then((response) => {
          // console.log(response);
          // console.log(response.data.docs.slice(0, 1)[0]);
          setBook(response.data.docs.slice(0, 1)[0]);
        });
    } catch (error) {
      console.error("Error feeching data:", error);
    }
  }, []);

  return (
    <div>
      {book !== null && (
        <div>
          <h1>{book.title}</h1>
          <img
            src={`https://covers.openlibrary.org/b/ISBN/${isbn}-M.jpg`}
            alt="cover book"
          />
        </div>
      )}
      <Link to="/">
        <button type="button">Return Home</button>
      </Link>
    </div>
  );
}

export default BookPage;
