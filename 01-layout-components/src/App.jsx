import PropTypes from 'prop-types';
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { LargeBookListItem } from './components/books/LargeListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import { NumberedList } from './components/lists/Numbered';
import { RegularList } from './components/lists/Regular';
import { SplitScreen } from './components/split-screen';
import { authors } from './data/authors';
import { books } from './data/books';

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
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComponent title='Left' />
        <RightSideComponent title='Right' />
      </SplitScreen>

      <hr />

      <RegularList
        items={authors}
        sourceName='author'
        ItemComponent={SmallAuthorListItem}
      />

      <NumberedList
        items={authors}
        sourceName='author'
        ItemComponent={LargeAuthorListItem}
      />

      <RegularList
        items={books}
        sourceName='book'
        ItemComponent={SmallBookListItem}
      />

      <NumberedList
        items={books}
        sourceName='book'
        ItemComponent={LargeBookListItem}
      />
    </>
  );
};

export default App;
