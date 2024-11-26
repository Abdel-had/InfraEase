import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';

const PipelineList = () => {
  const [pipelines, setPipelines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/pipelines/')
      .then(response => {
        setPipelines(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching pipelines:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pipelines.map((pipeline) => (
            <TableRow key={pipeline.id}>
              <TableCell>{pipeline.name}</TableCell>
              <TableCell>{pipeline.status}</TableCell>
              <TableCell>{new Date(pipeline.created_at).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PipelineList;
