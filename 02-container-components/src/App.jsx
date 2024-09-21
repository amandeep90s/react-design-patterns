import { CurrentUserLoader } from './components/current-user-loader';
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
      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader>
    </>
  );
};

export default App;
