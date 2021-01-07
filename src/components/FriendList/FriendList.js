import React from 'react';
import PropTypes from 'prop-types';

import FriendsListItem from './FriendsListItem';

import styles from './FriendsList.module.css';

const FriendsList = ({friends}) => {
    return (
        friends.length!==0 && 
        <section className={styles.sectionFriendList}>
            <ul className={styles.friendList}>
                {/* {friends.map(friend => <FriendsListItem key={friend.id} {...friend} />)} */}
                {friends.map(FriendsListItem)}
            </ul>
        </section>
    )
}

FriendsList.defaultProps = {
    avatar: 'https://dummyimage.com/48/2a2a2a/ffffff&text=Avatar+place',
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendsList;