import { BookInfo } from './components/book-info';
import { CurrentUserLoader } from './components/current-user-loader';
import { ResourceLoader } from './components/resource-loader';
import { UserInfo } from './components/user-info';
import { UserLoader } from './components/user-loader';

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
      <ResourceLoader resource={'user'} resourceUrl={'/api/users/3'}>
        <UserInfo />
      </ResourceLoader>
      <hr />
      <ResourceLoader resource={'book'} resourceUrl={'/api/books/3'}>
        <BookInfo />
      </ResourceLoader>
    </>
  );
};

export default App;
