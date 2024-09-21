import PropTypes from 'prop-types';

export const BookInfo = ({ book }) => {
  const { name, price, title, pages } = book || {};

  return book ? (
    <>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

BookInfo.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    pages: PropTypes.number,
  }),
};
