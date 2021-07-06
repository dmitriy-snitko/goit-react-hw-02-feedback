import React, { Component } from 'react';
import { Container, FeedbackContainer } from './App.styles';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value);

  countPositiveFeedbackPercentage = () =>
    Math.round(this.state.good * 100 / this.countTotalFeedback());

  onLeaveFeedback = (evnt) => {
    const feedback = evnt.target.dataset.feedback;

    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }))
  }

  render() {
    const total = this.countTotalFeedback();
    
    return (
      <Container>
        <FeedbackContainer>
          <Section title="Please leave feedback">
            <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}/>
          </Section>
          <Section title="Statistics">
          {total ?
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> : <Notification message="No feedback given" />}
          </Section>
        </FeedbackContainer>
      </Container>
    )
  }
}

export default App;
