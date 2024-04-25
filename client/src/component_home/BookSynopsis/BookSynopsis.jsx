import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookSynopsis() {
  const { userQuery } = useParams();
  const [bookId, setBookId] = useState(null);
  const [bookSynopsis, setBookSynopsis] = useState([]);

  useEffect(() => {
    if (bookId !== null) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then((res) => {
          setBookSynopsis(res.data.volumeInfo.description.substring(0, 50));
        });
    } else {
      try {
        axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${userQuery}`)
          .then((response) => {
            setBookId(response.data.items[0].id);
          });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
  }, [bookId]);

  return (
    <main>
      <div>
        <h3>Book synopsis : </h3>

        <p>{bookSynopsis}</p>
      </div>
    </main>
  );
}
