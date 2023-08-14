import React from 'react';
import { Button } from '@mui/material';

//검색하기 버튼 컴포넌트
const SearchButton = ({ handleSearch }) => {
    return (
        <Button 
            variant="contained" // 버튼 스타일
            onClick={handleSearch} // 클릭 시 handleSearch 함수 호출
            style={{ 
                backgroundColor: '#339999', // 배경색
                width: '150px', // 너비
                height: '50px', // 높이
                marginTop: '30px' // 상단 마진
            }} 
        >
                검색하기 {/* 버튼에 표시될 텍스트*/}
        </Button>
    );
};

export default SearchButton;