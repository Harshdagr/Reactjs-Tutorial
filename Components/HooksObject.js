import React, { useState } from 'react'


export default function HooksObject() {
    const [Name, setName] = useState({ firstname: '', lastName: '' })

    //  const handler = (event)=>{
    //      setName({
    //         firstname:event.target.value,

    //      })
    //  }
    const handel = (event) => {
        setName({
            ...Name, lastName: event.target.value
        })
    }
    return (
        <div>
            <input type='text' value={Name.firstname} onChange={event => { setName({ ...Name, firstname: event.target.value }) }}></input>
            <input type='text' value={Name.lastName} onChange={handel}></input>
            <h1>{Name.firstname}</h1>
            {/* {JSON.stringify(Name)}     to see in json format*/}   
            <h1>{Name.lastName}</h1>
        </div>
    )
}


//here if we enter first name in text box and the enter last name , so previously enter first name is gone which is not so good,
//by default it is handled in Class component, so if we want to overcome this we use ES6 conecept spread operator. like ...Name,firstname:event.target.value