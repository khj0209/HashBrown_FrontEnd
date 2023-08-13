import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({setNameSearchTerm, setRoomSearchTerm}) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField
        label="이름*"
        variant="outlined"
        onChange={(e) => setNameSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        />
        <div style={{ width: '25px' }} /> {/* 25 pixel spacing */}
        <TextField
        label="호실*"
        variant="outlined"
        onChange={(e) => setRoomSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        />
    </div>
  );
};

export default SearchBar;