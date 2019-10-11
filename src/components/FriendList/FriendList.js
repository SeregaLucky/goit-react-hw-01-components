/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './FriendList.module.css';
/* import - COMPONENTS */
import FriendListItem from './FriendListItem/FriendListItem';

/*
 * COMPONENT
 */
const FriendList = ({ friends }) => {
  const allFreindItems = friends.map(freind => (
    <FriendListItem key={freind.id} freind={freind} />
  ));

  return <ul className={styles.friendList}>{allFreindItems}</ul>;
};

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
