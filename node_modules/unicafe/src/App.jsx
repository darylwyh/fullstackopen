import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const total = good + neutral + bad;
  const score = good * 1 + neutral * 0 + bad * -1;
  const average = total === 0 ? 0 : score / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text='good' />
      <Button onClick={increaseNeutral} text='neutral' />
      <Button onClick={increaseBad} text='bad' />
      
      <h1>statistics</h1>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        average={average.toFixed(2)} 
        positivePercentage={positivePercentage.toFixed(2)} 
      />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>{props.text} {props.counter}</div>
  )
}

// a proper place to define a component
const Statistics = (props) => {
  return (
    <div>
      <Display text='good' counter={props.good} />
      <Display text='neutral' counter={props.neutral} />
      <Display text='bad' counter={props.bad} />
      <Display text='total' counter={props.total} />
      <Display text='average score' counter={props.average} />
      <Display text='positive feedback' counter={`${props.positivePercentage}%`} />
    </div>
  );
}

export default App