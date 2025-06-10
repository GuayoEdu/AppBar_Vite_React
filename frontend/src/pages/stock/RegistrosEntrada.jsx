import Box from '@mui/material/Box';
import React from 'react';

export default function RegistrosEntrada() {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Box sx={{ padding: 2 }}>
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: 1,
            boxShadow: 2,
            border: '1px solid #e0e0e0',
            p: 2,
            width: '100%',
            minHeight: '200px', // puedes ajustar la altura mínima si quieres
          }}
        >
        </Box>
      </Box>
    </Box>
  );
}