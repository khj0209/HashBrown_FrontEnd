import React from 'react';
import { Button } from '@mui/material';

const SearchButton = ({ handleSearch }) => {
    return (
        <Button 
            variant="contained"
            onClick={handleSearch}
            style={{ backgroundColor: '#339999', width: '150px', height: '50px', marginTop: '30px' }} // 버튼의 크기를 조정
            >검색하기
        </Button>
    );
};

export default SearchButton;