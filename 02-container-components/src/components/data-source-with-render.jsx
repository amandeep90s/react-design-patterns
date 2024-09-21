import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const DataSourceWithRender = ({ render, getData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getData();
      setData(result);
    })();
  }, [getData]);

  return render(data);
};

DataSourceWithRender.propTypes = {
  getData: PropTypes.func,
  render: PropTypes.func,
};
