import React, { useState } from 'react';
import Container from './utils/Container';
import Section from './utils/Section';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

function App () {

  const options = ["good","neutral","bad"];
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const voiteHandler = option => {
    switch (option) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral": 
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  function countTotalFeedback() {
    
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    
    const all = countTotalFeedback();

    if (good) {
      const rawPercentage = (good * 100) / all;
      return Number(rawPercentage.toFixed());
    }
    return 0;
  }
  
 
    return (
      <>
        <Container>
          <Section Title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={voiteHandler}
            />
          </Section>
          <Section Title="Statistics">
            {countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Container>
        {/* <Footer /> */}
      </>
    );
  
}

export default App;
