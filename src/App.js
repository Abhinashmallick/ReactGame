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
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
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