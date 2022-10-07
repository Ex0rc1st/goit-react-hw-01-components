import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  DescriptionWrapper,
  UserName,
  UserInfo,
  StatsWrapper,
  StatsItem,
  StatName,
  Quantity,
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
        <img src={avatar} alt={username} width="150px" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </DescriptionWrapper>

      <StatsWrapper>
        <StatsItem>
          <StatName>Followers</StatName>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatName>Views</StatName>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatName>Likes</StatName>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsWrapper>
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
