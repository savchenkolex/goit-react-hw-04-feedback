import React, { Component } from 'react';
import Container from './utils/Container';
import Section from './utils/Section';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  voiteHandler = option => {
    this.setState(pervState => {
      return {
        [option]: pervState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const good = this.state.good;
    const all = this.countTotalFeedback();

    if (good) {
      const rawPercentage = (good * 100) / all;
      return Number(rawPercentage.toFixed());
    }
    return 0;
  }

  render() {
    return (
      <>
        <Container>
          <Section Title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.voiteHandler}
            />
          </Section>
          <Section Title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
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
}

export default App;
