import PropTypes from 'prop-types';
import { Status, Friend, FriendName } from './FriendListItem.styled.js';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status status={isOnline}></Status>
      <img src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

// FriendListItem.defaultProps = {
//   avatar: noAvatar,
// };

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
