import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const HomeButtonContainer = styled('div')({
  position: 'absolute',
  top: '1rem',
  left: '1rem',
});

const HomeButton = () => {
  return (
    <div>
      <HomeButtonContainer>
        <Link to='/'>
          <Button variant="contained" size="large" style={{ backgroundColor: '#339999' }}>
            <HomeIcon />
          </Button>
        </Link>
      </HomeButtonContainer>
    </div>
  );
};

export default HomeButton;