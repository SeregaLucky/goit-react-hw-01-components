/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './TransactionHistory.module.css';
/* import - COMPONENTS */
import TransactionLine from './TransactionLine/TransactionLine';

/*
 * COMPONENT
 */
const TransactionHistory = ({ items }) => {
  const allTransactionLine = items.map(item => (
    <TransactionLine key={item.id} item={item} />
  ));

  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{allTransactionLine}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.string.isRequired,
      currency: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
