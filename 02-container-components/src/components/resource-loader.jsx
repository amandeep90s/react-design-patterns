import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export const ResourceLoader = ({ resource, resourceUrl, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(resourceUrl);
        setData(response.data);
      } catch (error) {
        console.error(`Error while fetching ${resource}`, error);
      }
    })();
  }, [resource, resourceUrl]);

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

ResourceLoader.propTypes = {
  resource: PropTypes.string,
  resourceUrl: PropTypes.string,
  children: PropTypes.node,
};
