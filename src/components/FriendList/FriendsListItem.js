import React from 'react';
// import PropTypes from 'prop-types';

import styles from './FriendsListItem.module.css';

const FriendsListItem = (friends) => {
    const {id, avatar, name, isOnline} = friends;
    const statusline = isOnline ? styles.onLine : styles.offLine;
    return (
        <li key={id} className={styles.item}>
            <span className={statusline}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="80" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

export default FriendsListItem;