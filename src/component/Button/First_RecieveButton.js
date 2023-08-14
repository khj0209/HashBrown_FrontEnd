import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// "택배 수령" 버튼 컴포넌
const First_ReceiveButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '-150px' }}> {/* 레이아웃 스타일 */}
    <Link to='/RecievePage'> {/* 택배 수령 페이지로의 링크 */}
      <Button variant="contained" style={{ width: '200px', height: '150px', backgroundColor: '#339999', fontSize: '23px'}}>
        {/* 버튼 스타일 */}
        택배 수령
        </Button>
    </Link>
    </div>
  );
};

export default First_ReceiveButton;