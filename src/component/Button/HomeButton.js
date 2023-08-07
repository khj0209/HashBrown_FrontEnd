import Button from '@mui/material/Button';   
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeButtonContainer = styled('div')({
  position: 'absolute',
  top: '1rem',
  left: '1rem',
});

const HomeButton = () => {
    return(
        <div>
    <HomeButtonContainer>     
    <Link to='/'>
      <Button variant="contained" size="large">Home</Button>
    </Link>
    </HomeButtonContainer> 
  </div>

    );
}
export default HomeButton;
