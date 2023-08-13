import React, { useState } from 'react';
import Homebutton from './Button/HomeButton';
import SearchBar from './Input/SearchBar';
import RecieveList from './List/RecieveList';
import SearchButton from './Button/SearchButton';

const RecievePage = () => {
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [roomSearchTerm, setRoomSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState({});

  const handleSearch = () => {
    setSearchFilter({ name: nameSearchTerm, room: roomSearchTerm });
  };

  return (
    <div>
      <h2>RecievePage</h2>
      <Homebutton />
      <SearchBar setNameSearchTerm={setNameSearchTerm} setRoomSearchTerm={setRoomSearchTerm} />
      <SearchButton handleSearch={handleSearch} />
      <RecieveList searchFilter={searchFilter} />
    </div>
  );
};

export default RecievePage;