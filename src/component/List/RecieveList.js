import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import RecieveButton from '../Button/RecieveButton';

const RecieveList = ({ searchFilter }) => {
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

  const handleFoundClick = (index) => {
    const newData = [...data];
    newData[index].found = !newData[index].found;

    // Reorder the list so that found items are at the bottom
    newData.sort((a, b) => (a.found === b.found ? 0 : a.found ? 1 : -1));

    setData(newData);
  };

  const filteredData = data.filter((row) =>
    (searchFilter.name ? row.name.includes(searchFilter.name) : true) &&
    (searchFilter.room ? row.room.includes(searchFilter.room) : true)
  );

  return (
    <Paper style={{ width: '50%', margin: 'auto', marginTop: '60px'}}>
        <div style={{ maxHeight: '550px', overflow: 'auto' }}> {/* Scrollable area */}
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>이름</TableCell>
            <TableCell align="right" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>호실</TableCell>
            <TableCell align="right" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>택배사</TableCell>
            <TableCell align="right" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>날짜 및 시간</TableCell>
            <TableCell align="right" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>상태</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {filteredData.map((row, index)=> (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.room}</TableCell>
              <TableCell align="right">{row.comp}</TableCell>
              <TableCell align="right">{row.dateTime}</TableCell>
              <TableCell align="right">
                <RecieveButton found={row.found} onClick={() => handleFoundClick(index)} />
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