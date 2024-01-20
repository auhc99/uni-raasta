import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const BranchDetailsTable = () => {
  const [branchData, setBranchData] = useState([]);

  useEffect(() => {
    setBranchData([
      { name: 'Computer Science', rate: '96.8%', salary: '$6500' },
      // Add other branches similarly
    ]);
  }, []);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Branch</TableCell>
            <TableCell>Employment Rate</TableCell>
            <TableCell>Median Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {branchData.map((branch, index) => (
            <TableRow key={index}>
              <TableCell>{branch.name}</TableCell>
              <TableCell>{branch.rate}</TableCell>
              <TableCell>{branch.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default BranchDetailsTable;
