import React from 'react';

import styles from './TransactionHistory.module.css';

import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
    return (
        <section className={styles.sectionTransactions}>
            <table className={styles.transactionTable}>
            <thead className={styles.transactionHead}>
                <tr className={styles.transactionRote}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.length!==0 &&
                <tbody className={styles.transactionBody}>
                    {items.map(item =>
                        <tr key={item.id} className={styles.transactionRote}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    )}
                </tbody>
            }
        </table>
        </section> 
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory;