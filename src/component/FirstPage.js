// 첫 번째 페이지 컴포넌트
import Button from '@mui/material/Button';   

import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = () =>{
  return(
  <div>
    <Link to='/RegisterPage'>
      <Button>등록</Button>
    </Link>
  </div>
  );
}

export default FirstPage;