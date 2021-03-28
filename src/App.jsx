import { Component, createContext, useState } from 'react'
import './App.css';

const BatteryContext = createContext()
const OnlineContext = createContext()

class Leaf extends Component {
  static contextType = BatteryContext

  render () {
    const battery = this.context
    return (
      <h1>Battery: {battery}</h1>
    )
  }
}

function Middle () {
  return (
    < Leaf />
  )
}

function App () {
  const [battery, setBattery] = useState(60)
  const [online, setOnline] = useState(false)
  return (
    <BatteryContext.Provider value={battery}>
      <OnlineContext.Provider value={online}>
        <button onClick={() => { setBattery(battery + 1) }}> Press</button>
        <Middle />
        <button onClick={() => { setOnline(!online) }}> Minus</button>
      </OnlineContext.Provider>
    </BatteryContext.Provider>
  );
}

export default App;
