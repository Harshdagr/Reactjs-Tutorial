import React from "react";

function Callback(){


  function add(a ,b , callback){
     console.log(a+b)
     callback();
   
  }
  function pr(){ 
     console.log("this must be print after sum")
   
  }



   add(4 , 5 , pr);


   
}

export default Callback; 