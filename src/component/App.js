import Header from './Header'
import React, {Component} from 'react'
import MainSection from './MainSection'

const initialState = [
  {
    text:'React ES6 TodoMVC',
    completed:false,
    id:0
  }
]

const todos=[
  {
    id:this.state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    completed:false,
    text:text
  },
  ...this.state.todos
]
this.setState({todos})

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos:initialState,
      gameID:null,
      player:0
    }
  }
render() {
return (
  <div>
    <Header
      onSave={this.onSave.bind(this)} />
    <MainSection todos={this.state.todos}/>
  </div>
);
}
}
export default App;
