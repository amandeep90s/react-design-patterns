import PropTypes from 'prop-types';

export const SmallAuthorListItem = ({ author }) => {
  const { name, age } = author;

  return (
    <p>
      Name: {name}, age: {age}
    </p>
  );
};

SmallAuthorListItem.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};
