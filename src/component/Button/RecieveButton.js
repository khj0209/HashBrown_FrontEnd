import React from 'react';
import { Button } from '@mui/material';

// 수령 버튼 컴포넌트
const RecieveButton = ({ found, onClick }) => { //found 및 onClick 함수를 props로 받음
  return (
    <Button
      variant="outlined" // 버튼 스타일
      onClick={onClick} // 클릭 시 onClick 함수 호출
      style={{
        backgroundColor: !found ? '#339999' : 'inherit', // 수령 상태에 따라 배경색 결정
        color: !found ? 'white' : 'inherit', // 수령 상태에 따라 글자색 결정
      }}
    >
      {found ? '수령' : '미수령'} {/*수령 상태에 따라 버튼에 표시될 텍스트 결정*/}
    </Button>
  );
};

export default RecieveButton;