import React from 'react';
import './Card.css';

function Card(props) {
    const {name,value}=props;
    return (
        <div className="card">
            <h1>
             {name || "junk food"} <br/>
            </h1>
            <h3>You have consumed {value || "1200 cal"} calories!</h3>
        </div>
    )
    
}
export default Card;
