import React, { useState } from 'react';
import Homebutton from './Button/HomeButton';
import SearchBar from './Input/SearchBar';
import RecieveList from './List/RecieveList';
import SearchButton from './Button/SearchButton';

const RecievePage = () => {
  // 상태 관리
  const [nameSearchTerm, setNameSearchTerm] = useState(''); // 이름으로 검색하기 위한 검색어
  const [roomSearchTerm, setRoomSearchTerm] = useState(''); // 호실로 검색하기 위한 검색어
  const [searchFilter, setSearchFilter] = useState({}); // 검색 필터 (이름, 호실)

  // 검색 처리 함수
  const handleSearch = () => {
    // 이름과 호실을 기반으로 검색 필터 설정
    setSearchFilter({ name: nameSearchTerm, room: roomSearchTerm });
  };

  return (
    <div>
      <h2>택배 수령 페이지</h2>
      <Homebutton />
      <SearchBar 
      setNameSearchTerm={setNameSearchTerm} 
      setRoomSearchTerm={setRoomSearchTerm} 
      />{/*검색 바 컴포넌트 (이름, 호실 입력) */}

      <SearchButton handleSearch={handleSearch} 
      /> {/*검색 버튼 컴포넌트 */}

      <RecieveList searchFilter={searchFilter}
      /> {/*택배 수령 리스트 컴포넌트 (검색 필터 적용) */}
    </div>
  );
};

export default RecievePage;