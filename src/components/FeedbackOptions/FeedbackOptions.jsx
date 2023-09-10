import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <div className={css["btn-wrapper"]}>
      {options.map(element => {
        return (
          <button
            key={element.toUpperCase()}
            onClick={() => {
              onLeaveFeedback(element.toLowerCase());
            }}
            className={css.btn}
            type="button"
          >
            {element.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
      options: PropTypes.array,
      onLeaveFeedback: PropTypes.func,
};
