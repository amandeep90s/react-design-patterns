import PropTypes from 'prop-types';

export const LargeBookListItem = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title:</h2>
      <p>{title}</p>
      <p># of Pages: {pages}</p>
    </>
  );
};

LargeBookListItem.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
  }),
};
