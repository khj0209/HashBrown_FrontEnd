import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

// 홈 버튼 컨테이너 스타일
const HomeButtonContainer = styled('div')({
  position: 'absolute',
  top: '1rem', // 상단에서 1rem 떨어진 위치
  left: '1rem', // 왼쪽에서 1rem 떨어진 위치
});

//홈 버튼 컴포넌트
const HomeButton = () => {
  return (
    <div>
      <HomeButtonContainer>
        <Link to='/'> {/* 홈 페이지로의 링크 */}
          <Button variant="contained" size="large" style={{ backgroundColor: '#339999' }}>
            {/* 버튼 스타일 */}
            <HomeIcon /> {/* 홈 아이콘 표시 */}
          </Button>
        </Link>
      </HomeButtonContainer>
    </div>
  );
};

export default HomeButton;