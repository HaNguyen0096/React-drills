import React, { Component } from 'react'

export default class Bomb extends Component {
  state = {
    count: 0,
  };


  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderDisplay() {
    const { count } = this.state
    if (count >= 100) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }


  render() {
    return (
      <div className='Bomb'>
        {this.renderDisplay()}
      </div>
    )
  }
}