import React, {useState} from 'react';
import HomeButton from './Button/HomeButton';
import CompButton from './Button/CompButton';
import NameRoomInput from './Input/NameRoomInput';
import RegisterList from './List/RegisterList';
import PlusButton from  './Button/PlusButton';

function RegisterPage() {
  // 상태 관리
  const [addList, setAddList] = useState([]); // 등록된 리스트
  const [inputName, setInputName] = useState(''); // 입력된 이름
  const [inputRoom, setInputRoom] = useState(''); // 입력된 호실
  const [selectedComp, setSelectedComp] = useState(''); // 선택된 택배사
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 아이템(이름, 호실, 택배사) 인덱스
  const [selectedIndex, setSelectedIndex] = useState(-1) // 선택된 택배사 인덱스

  // 택배사 선택 처리
  const selectingComp = (comp, index) => {
    setSelectedComp(comp);
    setSelectedIndex(index);
  }

  // 입력된 정보로 리스트에 추가
  const addEntry = () => {
    if (inputName && inputRoom) {
      const dateTime = new Date().toLocaleString(); //현재 날짜 및 시간
      setAddList([...addList, { name: inputName, room: inputRoom, courier: selectedComp, dateTime }]);
      setInputName('');
      setInputRoom('');

    }
  };

  //선택된 아이템 토글
  const toggleSelectedItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter(item => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  // 선택된 아이템 삭제
  const removeSelectedItems = () => {
    const newList = addList.filter((_, index) => !selectedItems.includes(index));
    setAddList(newList);
    setSelectedItems([]);
  };

  // 특정 아이템 삭제
  const removeEntry = (index) => {
    const newList = [...addList];
    newList.splice(index, 1);
    setAddList(newList);
  };

  return (
    <div>
      <h2>택배 등록 페이지</h2>
      <HomeButton/>
      
      <CompButton 
      onAddComp={selectingComp} 
      selectedIndex={selectedIndex}
      /> {/*택배사 선택 버튼*/}
      
      <NameRoomInput 
      handleNameChange = {(e) => setInputName(e.target.value)}
      handleRoomChange = {(e) => setInputRoom(e.target.value)}
      nameValue={inputName}
      roomValue={inputRoom}
      /> {/*이름 및 호실 입력 필드*/}
      
      <PlusButton Add={addEntry}/> {/*리스트 추가 버튼*/}
      
      <RegisterList 
      List={addList} 
      onRemove={removeEntry}
      selectedItems={selectedItems}
      toggleSelected={toggleSelectedItem}
      removeSelectedItems= {removeSelectedItems}
      /> {/*등록된 리스트 표시*/}
    </div>
  );
};


export default RegisterPage;