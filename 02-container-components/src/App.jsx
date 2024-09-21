import axios from 'axios';
import { BookInfo } from './components/book-info';
import { CurrentUserLoader } from './components/current-user-loader';
import { DataSource } from './components/data-source';
import { DataSourceWithRender } from './components/data-source-with-render';
import { ResourceLoader } from './components/resource-loader';
import { UserInfo } from './components/user-info';
import { UserLoader } from './components/user-loader';

const getDataFromServer = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data', error);
  }
};

const getDataFromLocalStorage = (key) => () => {
  return window.localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

const App = () => {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <hr />
      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
      <hr />
      <ResourceLoader resource={'user'} resourceUrl={'/api/users/2'}>
        <UserInfo />
      </ResourceLoader>
      <hr />
      <ResourceLoader resource={'book'} resourceUrl={'/api/books/3'}>
        <BookInfo />
      </ResourceLoader>
      <hr />
      <DataSource
        resource={'user'}
        getData={() => getDataFromServer('/api/users/1')}
      >
        <UserInfo />
      </DataSource>
      <hr />
      <DataSourceWithRender
        getData={() => getDataFromServer('/api/users/3')}
        render={(resource) => <UserInfo user={resource} />}
      />
      <hr />
      <DataSourceWithRender
        getData={() => getDataFromLocalStorage('test')}
        render={(msg) => <Message msg={msg} />}
      />
    </>
  );
};

export default App;
