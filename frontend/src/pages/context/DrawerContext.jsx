import React, { createContext, useContext, useState, useMemo } from 'react';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '../../components/constants/layout';

const DrawerContext = createContext();

export function DrawerProvider({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false); // <-- SIEMPRE INICIA CERRADO
  const [drawerHover, setDrawerHover] = useState(false); // <-- SIN HOVER INICIAL

  // Drawer expandido si está abierto o si el mouse está encima
  const isDrawerExpanded = drawerOpen || drawerHover;

  // Ancho actual del drawer
  const currentDrawerWidth = isDrawerExpanded ? DRAWER_WIDTH : MINI_DRAWER_WIDTH;

  const value = useMemo(
    () => ({
      drawerOpen,
      setDrawerOpen,
      drawerHover,
      setDrawerHover,
      isDrawerExpanded,
      currentDrawerWidth,
    }),
    [drawerOpen, drawerHover, isDrawerExpanded, currentDrawerWidth]
  );

  return (
    <DrawerContext.Provider value={value}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  return useContext(DrawerContext);
}