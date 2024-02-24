import React from 'react'
import "./acceptedRequests.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';




function createData(name, phone, address, gmail, select) {
    return { name, phone, address, gmail, select };
  }
  
  const rows = [
    createData('Saad Ali', 227363355236, 'asdfasdsfasdfewfdas', 'dadd@gmail.com'),
    createData('Abdul Rafay', 23345347, 'fddsafsdfsd', 'ddfad@gmail.com'),
    createData('Nasar', 264353452, 'asdasdfas', 'dasaad@gmail.com'),
    createData('Hashir', 33453405, 'asdasdas', 'dassd@gmail.com'),
    createData('Taha', 35453453446, 'aasdasdas', 'dadwad@gmail.com'),
  ];


function AcceptedRequests() {
  return (
    <>
       <header>
        <h1>Accepted Requests</h1>
    </header>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mechanic Name</TableCell>
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
              <TableCell align="right">
                <Select>
                  
                  <MenuItem>Reject</MenuItem>
                  <MenuItem>Disable</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default AcceptedRequests
