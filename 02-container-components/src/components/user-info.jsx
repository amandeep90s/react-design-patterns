import PropTypes from 'prop-types';

export const UserInfo = ({ user }) => {
  const { name, age, country, books } = user || {};

  return user ? (
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
  ) : (
    <h1>Loading...</h1>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    country: PropTypes.string,
    books: PropTypes.arrayOf(PropTypes.string),
  }),
};
