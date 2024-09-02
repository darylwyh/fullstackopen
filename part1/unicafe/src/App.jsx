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
      <Display text='good' counter={good} />
      <Display text='neutral' counter={neutral} />
      <Display text='bad' counter={bad} />
      <Display text='all' counter={total} />
      <Display text='average' counter={average} />
      <Display text='positive' counter={`${positivePercentage.toFixed(2)}%`} />
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

export default App