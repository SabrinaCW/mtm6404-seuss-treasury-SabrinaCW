import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        setBook(data)
        console.log(data)
      });
  }, [1]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
