import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import RecieveButton from '../Button/RecieveButton';

// 택배 수령 목록 컴포넌트
const RecieveList = ({ searchFilter }) => {
    
    // 초기 데이터 상태 설정   
    const [data, setData] = useState([
        { name: 'Amy', room: '101', comp: 'CJ 대한통운', dateTime: '2023-08-13 12:00', found: false },
        { name: 'Amy', room: '102', comp: 'CJ 대한통운', dateTime: '2023-08-14 14:30', found: false },
        { name: 'Charlie', room: '103', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Dean', room: '104', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Eline', room: '105', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Fred', room: '106', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'George', room: '107', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Henry', room: '108', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Ian', room: '109', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Jaklin', room: '110', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Katie', room: '111', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Lenny', room: '112', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Mark', room: '113', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Nicky', room: '114', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Ohen', room: '115', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Patrick', room: '116', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Quinten', room: '117', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Reamond', room: '118', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false },
        { name: 'Sunny', room: '119', comp: 'CJ 대한통운', dateTime: '2023-08-15 16:00', found: false }
    ]);

    // 수령 상태 변경 처리
    const handleFoundClick = (index) => {
        const newData = [...data];
        newData[index].found = !newData[index].found;

        // 수령된 택배를 목록 하단으로 정렬
        newData.sort((a, b) => (a.found === b.found ? 0 : a.found ? 1 : -1));

        setData(newData);
    };

    // 검색 필터를 적용하여 데이터 필터링
    const filteredData = data.filter((row) =>
        (searchFilter.name ? row.name.includes(searchFilter.name) : true) &&
        (searchFilter.room ? row.room.includes(searchFilter.room) : true)
    );

  return (
    <Paper style={{ width: '50%', margin: 'auto', marginTop: '60px'}}>
        <div style={{ maxHeight: '550px', overflow: 'auto' }}> {/*스크롤 가능한 영역*/}
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>이름</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>호실</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>택배사</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>날짜 및 시간</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>상태</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
        {filteredData.map((row, index)=> (
            <TableRow key={index}>
                {/* 행 데이터 표시 */}
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.room}</TableCell>
              <TableCell align="center">{row.comp}</TableCell>
              <TableCell align="center">{row.dateTime}</TableCell>
              <TableCell align="center">
                <RecieveButton found={row.found} onClick={() => handleFoundClick(index)} />
               {/* 수령 버튼 */}
              </TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
      </div>
    </Paper>
  );
};

export default RecieveList;