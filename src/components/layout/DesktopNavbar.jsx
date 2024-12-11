import React from 'react';
import { Stack, Link, Typography, Container, Toolbar } from '@mui/material';
import ThemeToggleButton from '../Buttons/ThemeToggleButton';

const DesktopNavbar = ({ pages, appName }) => {
  return (
    <Container>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left' } }>
            {appName}
        </Typography>
        
        <Stack direction="row" alignItems="center" gap={3}>
          {pages.map((page) => (
            <Link
              key={page.id}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {page.name}
            </Link>
          ))}

          <ThemeToggleButton />
        </Stack>
      </Toolbar>
  </Container>
  );
};

export default DesktopNavbar;
