import React from 'react';
import { AppBar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const pages = [
  { name: 'Moovies', id: 'moovies' },
  { name: 'Series', id: 'series' },
  { name: 'About', id: 'about' },
  { name: 'My Account', id: 'myAccount' },
];

const appName = "Cut & Roll"

export const Navbar = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar>
          {isMobile ? <MobileNavbar pages={pages} appName={appName} /> : <DesktopNavbar pages={pages} appName={appName} />}
    </AppBar>
  );
};
