import React from 'react';
import Homebutton from './Button/HomeButton';
import SplitButton from './Button/SplitButton';
import TextField from './Input/TextField';
import RegisterList from './List/RegisterList';

const RegisterPage = () =>{
  const DeliveryOptions = ['택배사 선택','쿠팡', '한진','로젠','마켓컬리','알라딘','우체국','기타'];
  return(
  <div>
  <h2>RegisterPage</h2>
  <Homebutton></Homebutton>
  <SplitButton buttonOptions ={DeliveryOptions} />
  <TextField></TextField>
  <button>추가</button>
  <RegisterList/> 
  
  </div>
  
  );
}

export default RegisterPage;

