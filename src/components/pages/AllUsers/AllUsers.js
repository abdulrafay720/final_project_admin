import React from 'react'
import "./AllUsers.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





function createData(name, phone, address, gmail, select) {
    return { name, phone, address, gmail, select };
  }
  
  const rows = [
    createData('Saad Ali', 227363355236, 'asdfasdsfasdfewfdas', 'dadd@gmail.com','asda'),
    createData('Abdul Rafay', 23345347, 'fddsafsdfsd', 'ddfad@gmail.com','asdas'),
    createData('Nasar', 264353452, 'asdasdfas', 'dasaad@gmail.com','asdas'),
    createData('Hashir', 33453405, 'asdasdas', 'dassd@gmail.com','asda'),
    createData('Taha', 35453453446, 'aasdasdas', 'dadwad@gmail.com','assa'),
  ];


function AllUsers() {
  return (
    <>
       <header>
        <h1>All Users</h1>
    </header>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Users Name</TableCell>
            <TableCell align="right">Phone no</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Selection</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.gmail}</TableCell>
              <TableCell align="right">{row.select}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default AllUsers
