import PropTypes from 'prop-types';
import { SplitScreen } from './components/split-screen';

const LeftSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: 'crimson' }}>{title}</h2>;
};

LeftSideComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

const RightSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: 'burlywood' }}>{title}</h2>;
};

RightSideComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

const App = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent title='Left' />
      <RightSideComponent title='Right' />
    </SplitScreen>
  );
};

export default App;
