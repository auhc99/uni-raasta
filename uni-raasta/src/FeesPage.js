import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';

function createRow(matriculationYear, tierA, tierB, tierC, noTuitionGrant) {
  return { matriculationYear, tierA, tierB, tierC, noTuitionGrant };
}

const rows = [
  createRow('AY2023/2024', 8250, 11550, 17965, 39168),
  createRow('AY2022/2023', 8250, 11550, 17980, 39168),
  createRow('AY2021/2022', 8200, 11500, 17878, 38914),
];

const FeesPage = () => {
  return (
    <Box my={2}>
      <Typography variant="h4" color="primary" gutterBottom>
        Tuition Fees
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tuition fees table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                Per Annum Amounts
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan={1}>
                Matriculation Year
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Fees payable by students in receipt of MOE Tuition Grant
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Fees payable by students NOT in receipt of MOE Tuition Grant (Inclusive of GST)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Year</TableCell>
              <TableCell align="center">Singapore Citizens (SGD)</TableCell>
              <TableCell align="center">Singapore Permanent Residents (SGD)</TableCell>
              <TableCell align="center">International Students (SGD)</TableCell>
              <TableCell align="center">No Tuition Grant (SGD)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.matriculationYear}</TableCell>
                <TableCell align="center">{row.tierA.toLocaleString()}</TableCell>
                <TableCell align="center">{row.tierB.toLocaleString()}</TableCell>
                <TableCell align="center">{row.tierC.toLocaleString()}</TableCell>
                <TableCell align="center">{row.noTuitionGrant.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FeesPage;
