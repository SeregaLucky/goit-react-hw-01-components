/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './TransactionLine.module.css';

/*
 * COMPONENT
 */
const TransactionLine = ({ item }) => {
  const { type, amount, currency } = item;

  return (
    <tr className={styles.line}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionLine.propTypes = {
  item: T.shape({
    id: T.string.isRequired,
    type: T.string.isRequired,
    amount: T.string.isRequired,
    currency: T.string.isRequired,
  }).isRequired,
};

export default TransactionLine;
