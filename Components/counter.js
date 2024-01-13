import React, { Component } from 'react'

class Counter extends React.Component {


    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    countHandler=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.countHandler}>counter  {this.state.count}</button>
      </div>
    )
  }
}

export default Counter
