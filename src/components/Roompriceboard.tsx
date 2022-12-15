import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../assets/css/Room.css'

function createData(
  name: string,
  calories: number,
  fat: string,
  carbs: string,
  protein: string,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('百日青', 201, "$2,000" , "$2,400", "雙人房"),
  createData('江某', 202, "$2,000" , "$2,400", "雙人房"),
  createData('九層吹', 203, "$2,000" , "$2,400", "雙人房，可加2~3床"),
  createData('石賓', 205, "$2,000" , "$2,400", "雙人房，可加1~2床"),
  createData('溪哥', 206, "$2,000" , "$2,400", "2床，可加1床"),
  createData('拉都希氏', 301, "$2,000" , "$2,400", "雙人房"),
  createData('腹斑蛙', 302, "$2,000" , "$2,400", "雙人房"),
  createData('小雨蛙', 303, "$2,000" , "$2,400", "雙人房，可加2~3床"),
  createData('螢火蟲', 305, "$2,800" , "$3,200", "四人房"),
  createData('五色鳥', 306, "$2,000" , "$2,400", "雙人房，可加1~2床"),

];

export function Roompriceboard() {
  return (
    <div className='d-flex'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "50vw" }} className="pricetable" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="pricetablecell" align="center">寢&nbsp;宮</TableCell>
              <TableCell className="pricetablecell" align="center">房號</TableCell>
              <TableCell className="pricetablecell" align="center">平日優惠價</TableCell>
              <TableCell className="pricetablecell" align="center">假日優惠價</TableCell>
              <TableCell className="pricetablecell" align="center">備註</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className="pricetablecell"  align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className="pricetablecell" align="center">{row.calories}</TableCell>
                <TableCell style={{fontSize:10, fontWeight:700, color:"red"}} align="center">{row.fat}</TableCell>
                <TableCell style={{fontSize:10, fontWeight:700, color:"green"}} align="center">{row.carbs}</TableCell>
                <TableCell className="pricetablecell" align="left">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}