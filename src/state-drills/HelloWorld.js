import React, { Component } from 'react'

export default class HelloWorld extends Component {
  state = {
    who: 'world',
    where: 'US',
  };

  render() {
    return (
      <div className='HelloWorld'>
        <p>Hello, {this.state.who}, from {this.state.where}!</p>
        <button
          onClick={() => this.setState({ who: 'world', where: 'VietNam' })}
        >
          World
        </button>
        <br/>
        <button
          onClick={() => this.setState({ who: 'friend', where: 'Canada' })}
        >
          Friend
        </button>
        <br />
        <button
          onClick={() => this.setState({ who: 'React', where: 'China' })}
        >
          React
        </button>
      </div>
    )
  }
}