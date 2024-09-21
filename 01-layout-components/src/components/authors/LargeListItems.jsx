import PropTypes from 'prop-types';

export const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author;

  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};

LargeAuthorListItem.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }).isRequired,
};
