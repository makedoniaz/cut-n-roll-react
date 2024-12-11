import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, Typography, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggleButton from '../Buttons/ThemeToggleButton';

const MobileNavbar = ({ pages, appName }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left' } }>
            {appName}
        </Typography>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {pages.map((page) => (
            <ListItem button key={page.id} onClick={toggleDrawer(false)}>
              <ListItemText primary={page.name} />
            </ListItem> 
          ))}
        </List>
      </Drawer>

      <ThemeToggleButton />
    </Toolbar>
  );
};

export default MobileNavbar;
