import axios from 'axios';
import { useState } from 'react';

function Books() {
  const [book, setBook] = useState("Title Book");

  const getBook = () => {
    axios
      .get('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
      .then((response) => {
        setBook(response.data.docs[9].title);
      })
  };

  return (

    <div className="globalBook">
      <p className='titleBook'>{book}</p>
      <img src='https://media.discordapp.net/attachments/1224365307125170207/1227190331095908352/Patient-0-book.png?ex=6627810f&is=66150c0f&hm=3774d4693929db84eb632142fa8f15ae4fd2e789bd196099815d490cf8d193be&=&format=webp&quality=lossless&width=512&height=662' width={"150px"}></img>
      <button type="button" onClick={getBook}>Click</button>
    </div>

  );
}

export default Books



