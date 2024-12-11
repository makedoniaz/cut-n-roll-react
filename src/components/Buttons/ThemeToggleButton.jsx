import React from 'react';
import { IconButton } from '@mui/material';
import { DarkMode, WbSunny } from '@mui/icons-material';
import { useThemeMode } from '../../hooks/useThemeMode';

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <IconButton onClick={toggleTheme} color="inherit" sx={{ width: 36, height: 36 }}>
        {isDarkMode ? 
            <DarkMode /> :
            <WbSunny sx={{ color: '#fbc02d' }} />
        }
    </IconButton>
  );
};

export default ThemeToggleButton;
