import React from 'react';
import Homebutton from './Button/HomeButton';
import SplitButton from './Button/SplitButton';
import TextField from './Input/TextField';
<<<<<<< HEAD
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
  
=======
import PlusButton from './Button/PlusButton';
import { Grid } from '@mui/material';

const RegisterPage = () => {
  const DeliveryOptions = ['택배사 선택','쿠팡', '한진','로젠','마켓컬리','알라딘','우체국', 'CJ 대한통운', '기타...'];

  return (
    <div>
      <h2>RegisterPage</h2>
      <Homebutton></Homebutton>
      <Grid container spacing={2}>
        <Grid item xs={12} md>
          <SplitButton buttonOptions={DeliveryOptions} />
        </Grid>
        <Grid item xs={12}>
          <TextField />
        </Grid>
        <Grid item xs={12}>
          <PlusButton></PlusButton>
        </Grid>
      </Grid>
    </div>
  ); // mui의 'grid'를 사용해서 testfield가 splitbutton 앞의 레이어에 있는 것을 해결하려고 했지만 실패함
}


{/*const RegisterPage = () =>{
  const DeliveryOptions = ['택배사 선택','쿠팡', '한진','로젠','마켓컬리','알라딘','우체국', 'CJ 대한통운', '기타...'];
  return(
  <div style={{ position: 'relative' }}>
    <h2>RegisterPage</h2>
    <Homebutton></Homebutton>
    <SplitButton buttonOptions={DeliveryOptions} /> <TextField style={{ position: 'relative', zIndex: '0' }} />
    <PlusButton></PlusButton>
>>>>>>> fba7062b4c2e3cac3f395cad4d4d0e45446747e3
  </div>
  
  );
}*/}

export default RegisterPage;

