import React, { useEffect, useState } from 'react'

export default function Counterwithhooks() {
    const [count, setcount] = useState(0)
    //    const setcount = count[1];

    const counthandle = () => {
        for(let i=0;i<10;i++){
            setcount(Precount => Precount+1)   //useState with previous state - to retain previous value
        }
    }
    useEffect(() => {
        console.log("hi use effect")
    });
        

    return (
        <div>
            <button onClick={counthandle}>counter with hooks{count} </button>
        </div>
    )
}

