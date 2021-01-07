import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({stats, title}) => {
    return (
        <section className={styles.sectionStatistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {stats.length!==0 && <ul className={styles.statList}>
                {stats.map(stat => {
                    return (
                        <li key={stat.id} className={styles.item}>
                            <span className={styles.label}>{stat.label}</span>
                            <span className={styles.percentage}>{stat.percentage}%</span>
                        </li>
                    )
                })}
            </ul>}
        </section>
    )
}

Statistics.defaultProps = {
    title: 'Upload stats',
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ),
    title: PropTypes.string,
}

export default Statistics;