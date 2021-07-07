import React from 'react';
import './Card.css';
function Card(props){
return (
<div className="box"><img src={`${props.name}`}  alt="meme" /></div>
);
}
export default Card;