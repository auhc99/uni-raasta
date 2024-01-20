import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createRow(matriculationYear, tierA, tierB, tierC, noTuitionGrant) {
  return { matriculationYear, tierA, tierB, tierC, noTuitionGrant };
}

const rows = [
  createRow('AY2023/2024', 8250, 11550, 17965, 39168),
  createRow('AY2022/2023', 8250, 11550, 17980, 39168),
  createRow('AY2021/2022', 8200, 11500, 17878, 38914),
];


export default function TuitionFeesTable() {
  return (
    <>

    <h1>Tuition Fees</h1>

    

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                
                <TableRow>
                  <TableCell align="center" colSpan={1} rowSpan={5}>
                    Matriculation Year
                  </TableCell>
                  <TableCell align="center" colSpan={4}>
                    Per Annum Amounts
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                  Fees payable by students in receipt of MOE Tuition Grant
                  </TableCell>
                  <TableCell align="center" colSpan={1} rowSpan={2}>
                  Fees payable by students NOT in receipt of MOE Tuition Grant (Inclusive of GST)
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align="center" colSpan={1}>
                    Singapore Citizens
                  </TableCell>
                  <TableCell align="center" colSpan={1}>
                  Singapore Permanent Residents
                  </TableCell>
                  <TableCell align="center" colSpan={1}>
                  International Students (Inclusive of GST)
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell align="center" colSpan={1}>
                    Tier A
                  </TableCell>
                  <TableCell align="center" colSpan={1}>
                    Tier B
                  </TableCell>
                  <TableCell align="center" colSpan={1}>
                    Tier C
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align="center" colSpan={1}>
                    S$(SGD)
                  </TableCell>
                  <TableCell align="center" colSpan={1}>
                  S$(SGD)
                  </TableCell>
                  <TableCell align="center" colSpan={1}>
                  S$(SGD)
                  </TableCell>
                  <TableCell align="center" colSpan={1}>
                  S$(SGD)
                  </TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow >
                    <TableCell align="right" colSpan={1}>{row.matriculationYear}</TableCell>
                    <TableCell align="right" colSpan={1}>{row.tierA}</TableCell>
                    <TableCell align="right" colSpan={1}>{row.tierB}</TableCell>
                    <TableCell align="right" colSpan={1}>{row.tierC}</TableCell>
                    <TableCell align="right" colSpan={1}>{row.noTuitionGrant}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </>


        );
}




