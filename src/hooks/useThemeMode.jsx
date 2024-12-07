import { useContext } from 'react';
import { ThemeModeContext } from '../contexts/ThemeContext';

// Хук для доступа к контексту темы
export const useThemeMode = () => useContext(ThemeModeContext);