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
            },
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
