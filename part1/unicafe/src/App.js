import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const getTotal = () => (good + neutral + bad)
  const getAverage = () => ((good*1) + (neutral*0) + (bad*-1))/getTotal()
  const getPercentage = () => `${(good*100)/getTotal()}%`

  if(getTotal() < 1){
    return(
      <span>No Feedback given</span>
    )
  }

  return(
    <>
    <table>
      <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="total" value ={getTotal()} />
      <StatisticLine text="average" value ={getAverage()} />
      <StatisticLine text="positive" value ={getPercentage()} />
      </tbody>
    </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App