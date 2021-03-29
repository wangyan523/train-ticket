import { Component, memo } from 'react'
import './App.css';

const Foo = memo(function Foo () {
  console.log('Foo render')
  return <div></div>
})
class App extends Component {
  state = {
    count: 0
  }
  render () {
    return (
      <div>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Add</button>
        <Foo name="Mike" />
        {this.state.count}
      </div>
    )
  }
}


export default App;
