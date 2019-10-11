/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Stats.module.css';
/* import - COMPONENT */
import StatsList from './StatList/StatsList';

/*
 * COMPONENT
 */
const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.stats}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <StatsList list={stats} />
      </div>
    </section>
  );
};

Stats.propTypes = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
