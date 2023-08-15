import React from 'react';
import { Button } from '@mui/material';

// 등록 버튼 컴포넌트
const RegisterButton = () => { 
  return (
    <Button
      variant="outlined" // 버튼 스타일
      style={{
        backgroundColor:'#339999',
        color: 'white',
        marginTop: '40px',
        width: '130px',
        height: '50px', 
        fontSize: '17px'
      }}
    > 등록하기
    </Button>
  );
};

export default RegisterButton;