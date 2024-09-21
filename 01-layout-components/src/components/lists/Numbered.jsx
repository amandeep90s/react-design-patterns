import PropTypes from 'prop-types';
import React from 'react';

export const NumberedList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <h3>{index + 1}</h3>
          <ItemComponent {...{ [sourceName]: item }} />
        </React.Fragment>
      ))}
    </>
  );
};

NumberedList.propTypes = {
  items: PropTypes.array.isRequired,
  sourceName: PropTypes.string.isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
};
