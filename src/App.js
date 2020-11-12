import React, {Component} from 'react'
import UserOutput from './Users/UserOutput'
import UserInput from './Users/UserInput'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      persons : [
        {name: 'Abhinash Mallick', age: '21', hobbies: ['Cricket', 'Football']},
        {name: 'Click Mallick', age: '22', hobbies: ['Music', 'Dance']}
      ]
    }
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age: '21', hobbies: ['Cricket', 'Football']},
        {name: 'Abhinash mallick', age: '22', hobbies: ['Music', 'Dance']},
      ]
    })
  }

  switchHobbiesHandler = () => {
    this.setState({
      persons : [
        {name: 'Abhi Mallick', age: '21', hobbies: ['Painting', 'Thinking']},
        {name: 'Abhinash mallick', age: '22', hobbies: ['Singing', 'Dance']},
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name: event.target.value, age: '21', hobbies: ['Cricket', 'Football']},
        {name: 'Abhinash mallick', age: '22', hobbies: ['Music', 'Dance']},
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi this is First Assignment</h1>
        <UserInput change={this.nameChangeHandler} name={this.state.persons[0].name} />     
        {this.state.persons.map((person, i) => {
          return (
          <UserOutput key={i} name={person.name} age={person.age} click={this.switchNameHandler.bind(this, 'Abhinav Mallick')}>
            <span style={{fontWeight:'600'}} onClick={this.switchHobbiesHandler}>My Hobbies :</span> {person.hobbies.join(", ")}
          </UserOutput>)          
        } )}
      </div>
    )
  }
}

export default App