import React from 'react';
import { Button } from '@mui/material';

const RecieveButton = ({ found, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      style={{
        backgroundColor: !found ? '#339999' : 'inherit',
        color: !found ? 'white' : 'inherit',
      }}
    >
      {found ? '수령' : '미수령'}
    </Button>
  );
};

export default RecieveButton;