
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import StockActual from '../pages/stock/StockActual';
import RegistrosEntrada from '../pages/stock/RegistrosEntrada';
import RegistrosSalida from '../pages/stock/RegistrosSalida';
import BloquearRegistros from '../pages/stock/BloquearRegistros';
import Flujo from '../pages/common/Flujo';
import ControlAuditoria from '../pages/config/ControlAuditoria';
import Productos from '../pages/config/Productos';
import Categorias from '../pages/config/Categorias';
import UnidadMedida from '../pages/config/UnidadMedida';
import TiposMovimientos from '../pages/config/TiposMovimientos';
import React, { useState } from 'react';
import NewAppBar from '../pages/NewAppBar';


const drawerWidth = 230;
const miniDrawerWidth = 76;
const drawerHeaderHeight = 48;


// Hook para obtener el título según la ruta
function usePageTitle() {
  const location = useLocation();
  switch (location.pathname.toLowerCase()) {
    case '/registros-entrada':
      return 'Entrada';
    case '/registros-salida':
      return 'Salida';
    case '/stock-actual':
      return 'Stock Actual';
    case '/bloquear-registros':
      return 'Bloquear Registros';
    case '/flujo':
      return 'Flujo';
    case '/control-auditoria':
      return 'Configuración Auditoría';
    case '/productos':
      return 'Configuración Productos';
    case '/categorias':
      return 'Configuración Categorías';
    case '/unidad-medida':
      return 'Configuración Unidad de Medida';
    case '/tipos-movimientos':
      return 'Configuración Tipos de Movimientos';
    default:
      return 'Stock Actual';
  }
}

export default function AppContent() {
  const title = usePageTitle();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerCurrentWidth = drawerOpen ? drawerWidth : miniDrawerWidth;

  return (
    <>
      <NewAppBar
        title={title}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <Box
        sx={{
          pt: `${drawerHeaderHeight}px`,
          pl: { xs: 0, sm: `${drawerCurrentWidth}px` },
          transition: 'padding-left 0.2s',
        }}
      >
        <Routes>
          <Route path="/" element={<StockActual />} />
          <Route path="/stock-actual" element={<StockActual />} />
          <Route path="/registros-entrada" element={<RegistrosEntrada />} />
          <Route path="/registros-salida" element={<RegistrosSalida />} />
          <Route path="/bloquear-registros" element={<BloquearRegistros />} />
          <Route path="/flujo" element={<Flujo />} />
          <Route path="/control-auditoria" element={<ControlAuditoria />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/unidad-medida" element={<UnidadMedida />} />
          <Route path="/tipos-movimientos" element={<TiposMovimientos />} />
        </Routes>
      </Box>
    </>
  );
}