import React from 'react'

function Count() {
    var value = 0;
    function counts(){
      value = value+1;
     document.getElementById('demo').innerHTML=value;
    }
    function decrease(){
    value = value-1;
     document.getElementById('demo').innerHTML=value;
    }
  
     

  return (
    <React.Fragment>
      <button onClick={counts}>hitme</button>
      <button onClick={decrease}>hitme</button>
      <h1 id='demo'>{value}</h1>
    </React.Fragment>
  )
}

export default Count
