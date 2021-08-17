import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Form.css';
import { useSelector , useDispatch } from 'react-redux';
import { changeEmail,changeName } from '../../Actions';

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
    return (
        <div className="form">
        <div  className={classes.root}>
           <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
          value = {myName} 
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
               onChange={(e) => {
                e.preventDefault();
              }}>
            </TextField>
            <button onClick={()=>{
                dispatch(changeEmail())
            }}></button>
        </div>
        </div>
    )
}

export default Form;
