import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HorizontalContentList } from './components/Lists/HorizontalContentList';

function App() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.default',
        color: 'text.primary',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <Navbar />
        <Box
          sx={{
            maxWidth: 900,
          }}>
          {/* <HorizontalContentList /> */}
        </Box>
    </Box>
  );
}

export default App;
