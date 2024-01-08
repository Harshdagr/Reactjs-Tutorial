import React from "react";     //In event handling - Access this in function by Binding it  = this and bind 
import Fucntionclick from "./Fucntionclick";

class Cfunctionclick extends React.Component{
  

//    constructor(props){
//        super(props);

    //    this.ChangeEvent = this.ChangeEvent.bind(this);

    //    this.state ={
    //     course:"btech",
    //     // list:this.props.list
    //     rollno :this.props.rollno
    //    }
    state ={
        user:[
        {id:1 ,name :"danny" ,class:"A"},
        {id:2 ,name :"manny" ,class:"b"},
        {id:3 ,name :"sanny" ,class:"c"}
       ]
    }
  
      
   

    // ChangeEvent = (e)=> {
    //     e.preventDefault(); //to stop anchor tag action
    //     this.setState({
    //         course:"mtech"
    //        })

 

    // }
    


   
render(){
      
        var bucket = this.state.user.map((users)=>{
          return(
            <React.Fragment>
           <div key={users.id}>{users.id}
          {users.name}
          {users.class}
          </div>
           </React.Fragment>
          ) 
      });
   
      
   
   return (
    
       <React.Fragment>
        <a href="https://www.google.co.in/"  onClick={this.ChangeEvent}>Hitme</a> 
        <button onClick={this.count}>click me for count</button>
        {/* {this.props.rollno} */}
        {/* {this.counts} */}
        {/* <h1>{number}</h1>  */}
        <h1>hello dagar ji</h1>
        <h1 key={bucket}>{bucket}</h1>
        
        </React.Fragment>
   )
}
}

export default Cfunctionclick;
