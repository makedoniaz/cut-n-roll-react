import React, { useRef, useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const HorizontalContentList = ({ items }) => {
    const menuRef = useRef(null);

    const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
    const [scrollRightVisible, setScrollRightVisible] = useState(true);

  // Функция для прокрутки
  const scroll = (direction) => {
    if (menuRef.current) {
      const scrollAmount = 300; // Дистанция прокрутки
      menuRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (menuRef.current) {
      const isScrolledToLeft = menuRef.current.scrollLeft === 0;
      const isScrolledToRight = menuRef.current.scrollWidth === menuRef.current.scrollLeft + menuRef.current.clientWidth;

      setScrollLeftVisible(!isScrolledToLeft); // Кнопка влево видна, если не в начале
      setScrollRightVisible(!isScrolledToRight); // Кнопка вправо видна, если не в конце
    }
  };

  useEffect(() => {
    const currentMenuRef = menuRef.current;

    if (currentMenuRef) {
      currentMenuRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentMenuRef) {
        currentMenuRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        mx: 'auto',
        overflow: 'hidden',
        '&:hover .scroll-button': { opacity: 1 }, // Показывать кнопки при наведении
      }}
    >
      {/* Горизонтальный список */}
      <Box
        ref={menuRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          whiteSpace: 'nowrap',
          '&::-webkit-scrollbar': { display: 'none' }, // Скрываем полосу прокрутки
        }}
      >
        {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: '0 0 auto',
                            mx: 1, // Отступ между элементами
                        }}
                    >
                        {item}
                    </Box>
        ))}
      </Box>

      {/* Кнопка прокрутки влево */}
      {scrollLeftVisible && (<IconButton
        onClick={() => scroll('left')}
        className="scroll-button"
        sx={{
          display: 'flex',
          position: 'absolute',
          left: 4,
          alignItems: 'center',
          opacity: 0,
          transition: 'opacity 0.3s, visibility 0.3s',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '6px', // Уменьшаем размер иконки
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        }}
      >
        <NavigateBeforeIcon sx={{ fontSize: 22 }} />
      </IconButton>)}

      {/* Кнопка прокрутки вправо */}
      {scrollRightVisible && (<IconButton
        onClick={() => scroll('right')}
        className="scroll-button"
        sx={{
          display: 'flex',
          position: 'absolute',
          right: 4,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          opacity: 0,
          transition: 'opacity 0.3s',
          padding: '6px', // Уменьшаем размер иконки
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        }}
      >
        <NavigateNextIcon  sx={{ fontSize: 22 }}/>
      </IconButton>)}
    </Box>
  );
};
