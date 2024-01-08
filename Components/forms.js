import React, { Component } from 'react'
import './style.css';

export class Forms extends Component {


  constructor(props){
    super(props); 
    this.state= {
      FirstName:'',
      LastName:''
    };
  }

  handleFirstname = (event) => {
  
        this.setState ({
         FirstName:event.target.value
        });
    }

  handleLastname =(event)=>{
    this.setState({
       LastName:event.target.value
    });
  }
  button = (event) =>{
      alert(`${this.state.FirstName} ${this.state.LastName}`)
      // event.preventDefault();
     }
   

  render() {
    const header ={
        color:"orange"
       
    }
 
    // const val = document.getElementById('demo');
    // const {FirstName , LastName} = this.state
    return (  
      <div>
   
        <form onSubmit={this.button}>
            <label style= {header} >First Name:</label>
            <input type='text' id='demo' placeholder='Enter name ' value={this.state.FirstName} onChange={this.handleFirstname}></input>
            {/* <h1>{val}</h1> */}
            <label className='demo5'>Last Name:</label>
            <input type='text' placeholder='Enter name' value={this.state.LastName} onChange={this.handleLastname}></input>
            <button className='btn' >submit</button>
        </form>
        
        <h1>Heyy Forms</h1>
      </div>
    )
  }
}

export default Forms
