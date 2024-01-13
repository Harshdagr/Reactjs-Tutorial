import React, { useState } from 'react'

export default function Hooks1Counter() {

    const Name = useState("harsh");
    const setName = Name[1]

    function StateHandler() {
        setName("chaudhary")
    }

    console.log(Name);
    return (
        <div>
            
            <button onClick={StateHandler}>submit</button>
            {Name}

        </div>
    )
}

