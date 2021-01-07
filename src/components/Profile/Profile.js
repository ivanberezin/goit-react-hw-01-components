import React from 'react';
import PropTypes from 'prop-types';

import styles from './Profile.module.css';

const Profile = ({name, tag, location, avatar, stats}) => {
    const {followers, views, likes} = stats;
    return (
        <section className={styles.sectionProfile}>
            <div className={styles.profile}>
                <div className={styles.description}>
                    <img
                        src={avatar}
                        alt="user avatar"
                        className={styles.avatar}
                    />
                    <p className={styles.name}>{name}</p>
                    <p className={styles.tag}>@{tag}</p>
                    <p className={styles.location}>{location}</p>
                </div>

                <ul className={styles.statsUl}>
                    <li className={styles.statsLi}>
                        <span className={styles.label}>Followers</span>
                        <span className={styles.quantity}>{followers}</span>
                    </li>
                    <li className={styles.statsLi}>
                        <span className={styles.label}>Views</span>
                        <span className={styles.quantity}>{views}</span>
                    </li>
                    <li className={styles.statsLi}>
                        <span className={styles.label}>Likes</span>
                        <span className={styles.quantity}>{likes}</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

Profile.defaultProps = {
    avatar: 'https://dummyimage.com/159/2a2a2a/ffffff&text=Avatar+placeholder',
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Profile;