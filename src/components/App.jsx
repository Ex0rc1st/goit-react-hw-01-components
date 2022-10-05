import { PageHeader } from 'components/PageHeader/PageHeader';
import { Profile } from 'components/Profile/Profile';
import user from 'user.json';

export const App = () => {
  return (
    <div>
      <PageHeader text="goit-react-hw-01-components" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
