import './App.css';
import React, { useState } from 'react';

function Card({index,cards,setCards,name,cal}) {
  return (
      <div className="card">
          <h1>
           {name || "junk food"} <br/>
          </h1>
          <h3>You have consumed {cal || "1200 cal"} calories!</h3>
          <button onClick={()=>{
            const newCards=cards.filter((card,i)=>(i!=index
            ))
            setCards(newCards);
          }}>delete</button>
      </div>
  ) 
}

function App() {
 const [cards,setCards]=useState([{name:'bruger', cal:'1200'},{name:'pizza', cal:'200'},{name:"Sandwich", cal:"100"},{name:"Coke", cal:"200"}]);
  return (
    <div className="App">
      <div className="container">
     {cards.map((card,index)=>(
          <Card key={index} cards={cards} setCards={setCards} name={card.name} cal={card.cal} index={index}/>
     ))}
    </div>
    </div>
  );
}

export default App;

