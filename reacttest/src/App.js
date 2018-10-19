import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        This is a name
      </div>
    );
  }
}

export class Nav extends Component {
  render(){
    return(
      <div className="ui pointing menu">
        <a className="active item">
          Home
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Friends
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
            </div>
            </div>
          </div>
        </div>
        
    );
  }
}

export class NavPlus extends Component{
  render(){
    return(
      <div>This exists</div>
    );
  }
}

export default App;
