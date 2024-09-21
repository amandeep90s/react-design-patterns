import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export const DataSource = ({ resource, children, getData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getData();
      setData(result);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resource]: data });
        }

        return child;
      })}
    </>
  );
};

DataSource.propTypes = {
  resource: PropTypes.string,
  getData: PropTypes.func,
  children: PropTypes.node,
};
