import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popover from './Popover.js';

require('velocity-animate');
require('velocity-animate/velocity.ui');

const TriggerButton = () => (
	<button type="button">Click me to trigger popover</button>
);

class App extends Component {
  render() {
    return (
      <div className="App">
				<div className="App-button">
					<Popover placement="bottom" target={TriggerButton()}>
						<p>I am an animated popover</p>
					</Popover>
				</div>
      </div>
    );
  }
}

export default App;
