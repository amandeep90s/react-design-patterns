import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/current-user');
        setUser(response.data);
      } catch (error) {
        console.error('Error while fetching current user', error);
      }
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};
