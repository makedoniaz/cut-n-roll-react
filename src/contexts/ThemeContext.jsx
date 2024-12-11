import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

import CssBaseline from '@mui/material/CssBaseline';


// Создаём контекст
export const ThemeModeContext = createContext();

// Провайдер темы
export const ThemeModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => loadFromLocalStorage('theme') || false);

    // Пересчитываем тему при изменении режима
    const theme = useMemo(
        () =>
          createTheme({
            palette: {
              mode: isDarkMode ? 'dark' : 'light',
              primary: {
                main: isDarkMode ? '#1d1d1d' : '#f5f5f5',  // Для светлой темы цвет чуть темнее белого
              },
              background: {
                default: isDarkMode ? '#121212' : '#ffffff',  // Цвет фона для светлой и темной темы
                paper: isDarkMode ? '#1d1d1d' : '#f5f5f5',    // Цвет фона для карточек/панелей
              },
              text: {
                primary: isDarkMode ? '#ffffff' : '#212121',  // Цвет текста в зависимости от темы
              },
            },
            components: {
                MuiButton: {
                  styleOverrides: {
                    root: {
                      '&:hover': {
                        backgroundColor: isDarkMode ? '#333333' : '#F5F5F5', // Светлый цвет на hover
                      },
                    },
                  },
            },
            }
          }),
        [isDarkMode]
      );

        // Переключение темы
        const toggleTheme = () => {
            setIsDarkMode((prev) => {
              saveToLocalStorage('theme', !prev);
              return !prev;
            });
        };

        return (
            <ThemeModeContext.Provider value={{ isDarkMode, toggleTheme }}>
                <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                </ThemeProvider>
            </ThemeModeContext.Provider>
        );
}
