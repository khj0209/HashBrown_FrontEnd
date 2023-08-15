import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const options = [
  '로젠',
  '마켓컬리',
  '알라딘',
  '우체국',
  '쿠팡',
  '한진',
  'CJ 대한 통운',
  '...기타'
];


function CompButton({ onAddComp, selectedIndex }) {
    
    // 앵커 요소의 상태를 저장, 메뉴를 열 때 사용
    const [anchorEl, setAnchorEl] = useState(null);

    // 메뉴를 닫기 위한 함수
    const handleClose = () => {
        setAnchorEl(null);
      };    
    
      // 메뉴 아이템을 클릭할 때 호출되는 함수
      // 선택한 택배사와 인덱스를 부모 컴포넌트에 전달, 메뉴를 닫음
    const handleMenuItemClick = (index) => {
        setAnchorEl(null);
        onAddComp(options[index], index);
        };


        // 버튼을 클릭할 때 호출되는 함수
        // 클릭된 버튼 요소를 앵커 요소로 설정하여 메뉴를 엶
    const handleClickListItem = (event) => { 
        setAnchorEl(event.currentTarget); //클릭된 버튼요소가 anchorE1에 저장됨
          };


  return (
    <div>
        {/* "택배사 선택" 버튼을 정의 */}

      <Button
        variant="contained"
        style ={{
            backgroundColor: '#339999',
            marginTop: '0px'
        }}
        color="primary"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClickListItem} //클릭하면 handleClickListItem 함수가 호출
      >

        {/* 선택된 택배사가 있으면 그 택배사를 표시, 없으면 '택배사 선택'을 표시함 */}
        {selectedIndex >= 0 ? options[selectedIndex] : '택배사 선택'} 
        </Button>
      
      {/* 드롭다운 메뉴를 정의 */}
      <Menu
        anchorEl={anchorEl} //anchorE1={}에서 중괄호에 들어가는 것은 컴포넌트가 어디에 붙을지 결정
        open={Boolean(anchorEl)} //open에 true나 false가 전달되면 열리거나 닫힘
        onClose={handleClose}
      >
        {/* 각 택배사를 나타내는 메뉴 아이템을 생성*/}
        {options.map((option, index) => (
          <MenuItem
          key={option}
          selected={index === selectedIndex}
          onClick={() => handleMenuItemClick(index)}
        > 
            {option}
        </MenuItem>
      ))}
    </Menu>
    </div>
  );
};

export default CompButton;
