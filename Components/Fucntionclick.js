import React from 'react'     //Topic - Event listner

function Fucntionclick() {

    function showdata() {
        console.log("function called")
    }


  return (
    <div>
    <h1>hello function click</h1>
    
    <button onClick={showdata}>click</button>
    </div>
  )
}

export default Fucntionclick
