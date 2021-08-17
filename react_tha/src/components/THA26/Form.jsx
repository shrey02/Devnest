import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Form.css';
import { useSelector , useDispatch } from 'react-redux';
import { changeEmail, changeName } from '../../Actions';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


function Form() {
    const myName = useSelector((state)=>state.name);
    const myEmail = useSelector((state)=>state.email);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    return (
        <div className="form">
        <div  className={classes.root}>
           <TextField
          id="outlined-textarea"
          label="Add Name"
          multiline
          variant="outlined"
          value = {name} 
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />  
        <TextField
              style={{
                width: 200,
                height: 10,
              }}
              id="outlined-textarea"
              label="Add Email"
              multiline
              variant="outlined"
              type='number'
              value={email}
               onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}>
            </TextField>
            <button onClick={()=>{
                dispatch(changeEmail(email))
                dispatch(changeName(name))
                setName("")
                setEmail("")
            }}>Submit</button>
            <div>{myName}</div>

            <div>{myEmail}</div>
        </div>
        </div>
    )
}

export default Form;
