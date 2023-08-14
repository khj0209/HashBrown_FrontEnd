import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// 이름과 호실을 입력받아 검색하는 컴포넌트
const SearchBar = ({setNameSearchTerm, setRoomSearchTerm}) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField
        label="이름*" //입력란 레이블 (Placeholder)
        variant="outlined" //테두리 스타일
        onChange={(e) => setNameSearchTerm(e.target.value)} // 이름 입력 값 변경 처리
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon /> {/*검색 아이콘 추가*/}
            </InputAdornment>
          ),
        }}
        />
        <div style={{ width: '25px' }} /> {/* 25 픽셀 간격 */}
        <TextField
        label="호실*" // 입력란 레이블 (Placeholder)
        variant="outlined" //테두리 스타일
        onChange={(e) => setRoomSearchTerm(e.target.value)} // 호실 입력 값 변경 처리
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon /> {/* 검색 아이콘 추가*/}
            </InputAdornment>
          ),
        }}
        />
    </div>
  );
};

export default SearchBar;