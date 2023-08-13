import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function FormPropsTextFields() {
  const [name, setName] = useState('');
  const handleNameChange = (event) => {setName(event.target.value);};

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      setItems([...items, itemName]);
      setItemName('');
    }
  };

  const handleNameChange = (index, event) => {
    const updatedItems = [...items];
    updatedItems[index] = event.target.value;
    setItems(updatedItems);
  };



  return (
    /*<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <TextField
          required
          id="outlined-required"
          label="이름"
          value={name}
          onChange ={handleNameChange}
          //defaultValue="Hello World"
        />
        <li>{name}</li>


     <TextField
          required
          id="outlined-required"
          label="호실"
          //defaultValue="예)B705"
        />

    </Box>*/

    <form>
      <input type="text" value={name} onChange={handleNameChange} />
      <button type ='submit'>추가</button>
    </form>
  )}
