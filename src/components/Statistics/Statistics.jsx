import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul className={css.votes}>
        <li>Good: {good} </li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <div className={css.aggregator}>
        <div>
          <p className={css['agg-title']}>Total:</p>
          <p>{total}</p>
        </div>
        <div>
          <p className={css['agg-title']}>Positive precentage:</p>
          <p>{positivePercentage}%</p>
        </div>
      </div>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
