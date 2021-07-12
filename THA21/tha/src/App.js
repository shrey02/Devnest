import './App.css';
import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function Card({index,setCards,cards,cal,name,EditCard}) {
  const [edit,setEdit]=useState(false);
  return (
    <div className="card">
    { edit ? (
            <div>
              <h1>
                <TextField  
                style={{
                  width:200,
                  height:10,
                }}
                id="outlined-textarea"
                        label="add Item Name"
                        placeholder="Name"
                        multiline
                        variant="outlined"
                        type='number'
                        value={name} onChange={(e)=>{
                    e.preventDefault();
                    EditCard(index,e.target.value,cal);
                      }}>
                </TextField>
              </h1>
              <h3>
              You have consumed <input
               style={{
                width:70,
              }} 
              type="number"
              value={cal} onChange={(e)=>{
                  e.preventDefault();
                  EditCard(index,name,e.target.value);
                    }}>
                </input> &nbsp;calories!
              </h3>
                  <Button
                   style={{
                    marginLeft:250,
                    marginTop:-40,
                    position: 'absolute'
                 }}
                   variant="contained"
                   color="primary"
                   size="small"
                   startIcon={<SaveIcon />}
                   onClick={(e)=>{
                      setEdit(false);
                    }}>Done</Button>
            </div> 
      ):(
        <div>
          <h1>
            {name || "junk food"} <br/>
            
          </h1>
          <Button
          style={{
            marginLeft:150,
            marginTop:-40,
            position: 'absolute'
         }}
           variant="contained"
           color="primary"
           endIcon={<SendIcon></SendIcon>}
          className="edit" onClick={()=>{
              setEdit(true);
            }}>Edit</Button> 
          <h3>You have consumed {cal || "1200 cal"} calories!</h3>
          
            <Button
            style={{
              marginLeft:250,
              marginTop:-40,
              position: 'absolute'
           }}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={()=>{
          const newCards=cards.filter((card,i)=>(i!==index
          ))
          setCards(newCards);
        }}
      >
        Delete
      </Button>
        </div>
    )}
  </div>
  );
}

function App() {

 const [cards,setCards]=useState([{name:'burger', cal:'1200'},{name:'pizza', cal:'200'},
                                 {name:"Sandwich", cal:"100"},{name:"Coke", cal:"200"}]);
 const [title,setTitle]=useState('');
 const [calories,setCalories]=useState('');
 
 const EditCard = (index,name,cal) => {
  setCards(prevState => {
    return prevState.map((card, i) => {
      if (i === index) return {name , cal};
      return card;
    });
  });
};

 return (
    <div className="App">


      <TextField
      style={{
        marginTop:50,
        marginLeft:20
      }}
       id="outlined-textarea"
       label="add Item Name"
       placeholder="Name"
       multiline
       variant="outlined"
       value={title} onChange={(e)=>{
        setTitle(e.target.value);
      }}></TextField>


      <TextField
      style={{
        marginTop:50,
        marginLeft:20
      }}
       id="outlined-textarea"
       label="add Item Calories"
       placeholder="Calories"
       multiline
       variant="outlined"
      value={calories} onChange={(e)=>{
        setCalories(e.target.value);
      }}></TextField>


       <Button
       style={{marginTop:150,marginLeft:-255,position:'absolute'}}
       variant="contained"
       color="default"
       startIcon={<CloudUploadIcon />}
       onClick={()=>{
         const obj=[...cards,{name:title,cal:calories}];
         setCards(obj);
         setCalories('');
         setTitle('');
       }}>add</Button>


      <div className="container">
     {cards.map((card,index)=>(
          <Card key={index} cards={cards} setCards={setCards} name={card.name} 
          cal={card.cal} index={index} EditCard={EditCard}/>
     ))}
    </div>
    </div>
  );
}

export default App;

