import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

//이름과 호실을 입력받는 컴포넌트
const NameRoomInput = ({ 
    handleNameChange, // 이름 변경 처리 함수
    handleRoomChange, // 호실 변경 처리 함수
    nameValue, // 이름 입력 값
    roomValue // 호실 입력 값
}) => {
    return (
      <Box
        component="form"
        sx={{
            display: 'flex', // Flexbox 사용으로 가로 정렬
            justifyContent: 'center', // 중앙 정렬
          '& .MuiTextField-root': { m: 1, width: '25ch' }, // 입력 필드 스타일
          marginTop: '10px' // 상단 마진
        }}
        noValidate // 유효성 검사 비활성화
        autoComplete="off" // 자동 완성 비활성화
      >
        <TextField
          required // 필수 입력
          id="outlined-required"
          label="이름" // 레이블 텍스트
          value={nameValue} // 입력 값
          onChange={handleNameChange} // 입력 값 변경 처리
        />
        <div style={{ width: '25px' }} /> {/* 25 픽셀 간격*/}
        <TextField
          required // 필수 입력
          id="outlined-required" // 레이블 텍스트
          label="호실" // 입력 값
          value={roomValue} // 입력 값 변경 처리
          onChange={handleRoomChange}
        />
      </Box>
    );
  };
  
  export default NameRoomInput;