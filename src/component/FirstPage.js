import React from 'react';
import First_RegisterButton from './Button/First_RegisterButton';
import First_RecieveButton from './Button/First_RecieveButton';

// 첫번째 페이지 컴포넌트
const FirstPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        {/*flexbow를 사용하여 내부 요소를 수평 정렬하고, 중앙에 배치 */}

        <First_RegisterButton />
        {/*택배 등록 버튼 컴포넌트*/}

        <div style={{ width: '490px'}}/>
        {/* 두 버튼 사이의 간격을 조정하기 위한 빈 div*/}

        <First_RecieveButton />
        {/*택배 수령 버튼 컴포넌트*/}
    </div>
  );
};

export default FirstPage;