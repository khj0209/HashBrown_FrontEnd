import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
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
          //defaultValue="Hello World"
        />


     <TextField
          required
          id="outlined-required"
          label="호실"
          //defaultValue="예)B705"
        />

    </Box>
  )}
