import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// "택배 등록" 버튼 컴포넌트
const First_RegisterButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginRight: '-150px' }}> {/* 레이아웃 스타일 */}
      <Link to='/RegisterPage'> {/* 택배 등록 페이지로의 링크 */}
      <Button variant="contained"style={{ width: '200px', height: '150px', backgroundColor: '#339999', fontSize: '23px'}}>
        {/* 버튼 스타일 */}
        택배 등록
        </Button>
      </Link>
    </div>
  );
};

export default First_RegisterButton;