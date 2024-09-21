import PropTypes from 'prop-types';

export const SmallBookListItem = ({ book }) => {
  const { name, price } = book;

  return (
    <p>
      Book: {name}, Price: {price}
    </p>
  );
};

SmallBookListItem.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
