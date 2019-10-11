/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './StatsList.module.css';

/*
 * COMPONENT
 */
const StatsList = ({ list }) => {
  const renderNumverForColor = () => {
    let firstColor = Math.round((Math.random() * 1000) / 4);
    firstColor = firstColor < 50 ? firstColor + 50 : firstColor;

    let secondColor = Math.round((Math.random() * 1000) / 4);
    secondColor = secondColor < 50 ? secondColor + 50 : secondColor;

    let thirdColor = Math.round((Math.random() * 1000) / 4);
    thirdColor = thirdColor < 50 ? thirdColor + 50 : thirdColor;

    return `${firstColor}, ${secondColor}, ${thirdColor}`;
  };

  return (
    <ul className={styles.list}>
      {list.map(item => (
        <li
          key={item.id}
          className={styles.item}
          style={{ background: `rgb(${renderNumverForColor()})` }}
        >
          <span className={styles.span}>{item.label}</span>
          <span className={styles.span}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  list: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default StatsList;
