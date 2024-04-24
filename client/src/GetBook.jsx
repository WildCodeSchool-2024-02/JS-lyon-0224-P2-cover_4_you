import axios from "axios";

async function GetBook() {
  const homeBooks = [
    "twilight",
    "harry+potter",
    "dragon+ball+z",
    "l%27%C3%A9tranger",
  ];

  try {
    const responses = await Promise.all(
      homeBooks.map((book) =>
        axios.get(`https://openlibrary.org/search.json?q=${book}`)
      )
    );

    const newBookList = responses.map((response) => response.data.docs[0]);
    return newBookList;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default GetBook;
