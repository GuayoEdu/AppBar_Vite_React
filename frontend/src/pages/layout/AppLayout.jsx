import React from 'react';
import { DRAWER_HEADER_HEIGHT, ANIMATION_DURATION } from '../../components/constants/layout';
import { useDrawer } from '../context/DrawerContext';
import NewAppBar from '../NewAppBar';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '../../components/constants/layout';


export default function AppLayout({ title }) {
  const { drawerOpen, drawerHover } = useDrawer();
  const isDrawerExpanded = drawerOpen || drawerHover;
  const currentDrawerWidth = drawerOpen ? DRAWER_WIDTH : MINI_DRAWER_WIDTH;

  return (
    <>
      <NewAppBar title={title} />
      <Box
        sx={{
          pt: { xs: '16px', sm: `${DRAWER_HEADER_HEIGHT}px` }, // padding-top normal
          pl: { xs: 0, sm: `${currentDrawerWidth}px` },        // sin separación en móviles
          minHeight: '100vh',
          width: '100%',
          transition: (theme) =>
            theme.transitions.create(['padding-left', 'padding-top'], {
              easing: theme.transitions.easing.sharp,
              duration: ANIMATION_DURATION,
            }),
          bgcolor: '#f5f6fa',
          overflowX: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
