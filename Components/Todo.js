import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         task:''
      }
    }
    

 handler=(event)=>{
    this.setState({
     task:event.target.value
    })
 }
 buttonehandler=()=>{
    
 }


  render() {
    return (
      <div>
      <form onSubmit=<h1>{this.state.task}</h1>>
        <input type='text' value={this.state.task} onChange={this.handler}></input>
        
        <button onClick={this.buttonehandler}>Add Task</button>
        {/* <h1>{this.state.task}</h1> */}
        {
            
        }
        </form>
      </div>
    )
  }
}

export default Todo
