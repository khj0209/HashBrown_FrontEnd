import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import React, {Component} from 'react';
import FirstPage from './component/FirstPage';


// 첫 번째 페이지 컴포넌트
/*const FirstPage = () => {
  return (
    <div className="container" style={{backgroundImage: "url(https://www.hana.hs.kr/assets/images/intro/school_11.jpg)"}}>
      <div className="buttons">
        <Link to="/register" className="button">
          등록
        </Link>
        <Link to="/receive" className="button">
          수령
        </Link>
      </div>
    </div>
  );
};*/


// 두 번째 페이지 (택배 등록 페이지)
/*const SecondPage = () => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [parcelList, setParcelList] = useState([]);

  const handleAddParcel = () => {
    if (company && name && room) {
      const newParcel = { company, name, room };
      setParcelList([...parcelList, newParcel]);
      setCompany('');
      setName('');
      setRoom('');
    }
  };

  return (
    <div className="container">
      <h1>택배 등록 페이지</h1>
      <div className="input-group">
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="택배사 입력"
          style={{ width: '100px', height: '10px' }}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="호실"
        />
        <button className="plus-button" onClick={handleAddParcel}>
          +
        </button>
      </div>
      


<div className="parcel-list">
  {parcelList.map((parcel, index) => (
    <div key={index} className="parcel-item">
      <span className="info-label">이름: </span>
      <span>{parcel.name}</span>
      <span className="info-label">호실: </span>
      <span>{parcel.room}</span>
      <span className="info-label">택배사: </span>
      <span>{parcel.company}</span>
    </div>
  ))}
</div>





      <div className="button-group">
        
        <button className="register-button" onClick={handleAddParcel}>
          등록하기
        </button>
      </div>
    </div>
  );
};

//세 번째 페이지(택배 검색/수령)



//홈버튼
const HomeButton = () => {
  return(
    <div className = "home-button">
      <Link to="/" className= "button">Home</Link>
    </div>
  );
};
*/

function App() {
  return (
    <div>
    <Router>
      <HomeButton />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/register" element={<SecondPage />} />
        <Route path="/receive" element={<SecondPage />} />
      </Routes>
    </Router>

    <FirstPage />
    </ div>
  );
}

export default App;



