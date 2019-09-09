import React from 'react';
import './App.css';
// import axios from 'axios'
import UserCard from './UserCard'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      // user: "",
      followers: [],
      id: ""
    }
  }


  componentDidMount(){
    fetch(`https://api.github.com/users/dmunter2/followers`)
      .then(res => res.json())
      .then(users => this.setState({ followers: users }))
      .catch(err => console.log('hey', err))
  }






  render() {


    return (
      <div>
          <UserCard id={this.state.id} followers={this.state.followers}/>
        </div>
    );
  }

}

export default App;



/*
      <div className="App">
        <input
          type='text'
          value={this.state.user}
          onChange={this.handleChange}
          />
        <h1>this is awesome</h1>
        <div>
          {this.state.followers.map(followers => {
            return (
              <div key={followers}>
                {this.login}
              </div>
            );

          })}
        </div>
      </div>
*/