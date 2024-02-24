import React from 'react'
import "./MechanicServices.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';




function createData(name, location, servicename, phone, select) {
    return { name, location, servicename, phone, select };
  }
  
  const rows = [
    createData('Saad Ali', 'ksjksjasj', 'asdfasdsfasdfewfdas', 786478236),
    createData('Abdul Rafay', 'asas', 'fddsafsdfsd', 23345347),
    createData('Nasar', 'sdsadas', 'asdasdfas', 23345347),
    createData('Hashir', 'sadsdas', 'asdasdas', 23345347),
    createData('Taha', 'ascdcassc', 'aasdasdas', 23345347),
  ];


function MechanicServices() {
  return (
    <>
       <header>
        <h1>Mechanic Services</h1>
    </header>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mechanic Name</TableCell>
            <TableCell align="right">Mechanic Location</TableCell>
            <TableCell align="right">Service Name</TableCell>
            <TableCell align="right">Phone no</TableCell>
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
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.servicename}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">
                <Select>
                  
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Reject</MenuItem>
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

export default MechanicServices
