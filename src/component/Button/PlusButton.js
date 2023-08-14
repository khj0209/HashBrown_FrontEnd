import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

// '+' 버튼 컴포넌트
const PlusButton = ({Add}) => { // Add 함수를 props로 받음
  return (
    <Button 
    variant="contained" // 버튼 스타일
    style ={{ 
      backgroundColor: '#339999', // 배경색 설정
      marginTop: '23px' // 상단 마진 설정
    }}
    onClick={Add}> {/* 클릭 시 Add 함수 호출*/}
      <AddIcon /> {/*'+' 아이콘 표시*/}
    </Button>
  );
};

export default PlusButton;