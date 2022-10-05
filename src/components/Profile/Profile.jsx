import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  DescriptionWrapper,
  UserName,
} from './Profile.styled.js';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileWrapper>
      <DescriptionWrapper>
        <img src={avatar} alt={username} width="300px" class="Avatar" />
        <UserName>{username}</UserName>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </DescriptionWrapper>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
