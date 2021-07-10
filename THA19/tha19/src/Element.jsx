import React, { useState } from 'react';
import './Element.css'
function Element() {
    var [count,setCount]=useState(0);
     const increase=()=>{
        setCount(count+1);
     }
    return (
        <button className="glow-on-hover" onClick={increase}>{count}</button>
    )
}
export default Element;