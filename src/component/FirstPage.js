// 첫 번째 페이지 컴포넌트
import Button from '@mui/material/Button';  
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';

import Homebutton from './Button/HomeButton';


//등록,수령버튼 위치조정
const CenteredButtonsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '90vh',
})
//버튼 스타일
const LargeButton = styled(Button)({
  width: '300%', // Make the button take the full width of its container
  height: '10rem', // Adjust this value to control the button's size
  marginBottom: '1rem', // Add spacing between buttons
});

const FirstPage = () =>{
  return(
  <div>
    <CenteredButtonsContainer>
    <Link to='/RegisterPage'>
      <LargeButton variant="contained" size="large">등록</LargeButton>
    </Link>
    <Link to='/RecievePage'>
      <LargeButton variant="contained" size="large">수령</LargeButton>
    </Link>
    </CenteredButtonsContainer>
    

    <Homebutton></Homebutton>
    </div>
    
  
 
  );
}

export default FirstPage;


