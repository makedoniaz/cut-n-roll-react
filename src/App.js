import React from 'react';
import { useThemeMode } from './hooks/useThemeMode';
import { Button, Box } from '@mui/material';

function App() {
  const { isDarkMode, toggleTheme } = useThemeMode();

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
      <Button variant="contained" onClick={toggleTheme}>
        Переключить тему
      </Button>
      <p>Текущая тема: {isDarkMode ? 'Тёмная' : 'Светлая'}</p>
    </Box>
  );
}

export default App;
