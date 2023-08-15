import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// 택배 등록 목록 텀포넌트
const RegisterList = ({ List, onRemove, selectedItems, toggleSelected, removeSelectedItems })=>{


  return (
    <Paper style={{ width: '50%', margin: 'auto', marginTop: '40px'}}>
      <div style={{ maxHeight: '450px', overflow: 'auto' }}> 
      {/*스크롤 가능한 테이블을 위한 div*/}
      
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {/*테이블 해더 정의*/}
            {/*각 셀은 중앙 정렬되며 특정 스타일을 가짐*/}
            {/*삭제 아이콘을 포함하는 마지막 셀도 있음*/}

            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>번호</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>이름</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>호실</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>택배사</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#339999', color: 'white', fontWeight: 'bold' }}>날짜 및 시간</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#339999'}}>
              <IconButton 
              onClick={removeSelectedItems}>
                <DeleteIcon style = {{ color: 'white'}}/>
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {List.map((list, index) => (
            <TableRow 
            key = {index}
            style={{ backgroundColor: selectedItems.includes(index) ? '#f5f5f5' : 'white' }} // 배경색 변경
              > {/* 각 행은 택배 정보를 표시 */}

              <TableCell align="center">{index+1}</TableCell> {/* 번호 */}
              <TableCell align="center">{list.name}</TableCell> {/* 이름 */}
              <TableCell align="center">{list.room}</TableCell> {/* 호실 */}
              <TableCell align="center">{list.courier}</TableCell> {/* 택배사 */}
              <TableCell align="center">{list.dateTime}</TableCell> {/* 날짜 및 시간 */}
              <TableCell align="center">
                <Checkbox
                  checked={selectedItems.includes(index)} // 해당 행이 선택되었는지 확인
                  onChange={() => toggleSelected(index)} // 선택 상태 변경 처리
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </Paper>
  );
};

export default RegisterList;