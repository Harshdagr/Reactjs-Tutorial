import React from "react";   //Topic-States

class Channel extends React.Component{

    constructor(){
        super();
        this.state = {
            msg:"Welcome to my youtube channel and subscribe it"
        }
    }  
subscribe(){
  this.setState({
    msg: "thankx for subscribing"
  })
}

render()
{
   return(
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick= { () => this.subscribe()}>subscribe</button>
      </div>
    ) 
  
   }
}


export default Channel;