import React from 'react';
import './Card.css';
function Card({img}){
return (
<div className="box"><img src={img}  alt="meme" /></div>
);
}
export default Card;