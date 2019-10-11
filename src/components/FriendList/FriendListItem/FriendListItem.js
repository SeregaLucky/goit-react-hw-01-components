/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './FriendListItem.module.css';

/*
 * COMPONENT
 */
const FriendListItem = ({ freind }) => {
  const { avatar, name, isOnline } = freind;

  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.statusTrue} />
      ) : (
        <span className={styles.statusFalse} />
      )}
      <img className={styles.avatarPhoto} src={avatar} alt="ava" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  freind: T.shape({
    avatar: T.string.isRequired,
    name: T.string.isRequired,
    isOnline: T.bool.isRequired,
    id: T.number.isRequired,
  }).isRequired,
};

export default FriendListItem;
