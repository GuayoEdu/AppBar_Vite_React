import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import NewAppBar from './pages/NewAppBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import StockActual from './pages/StockActual';
import RegistrosEntrada from './pages/RegistrosEntrada';
import RegistrosSalida from './pages/RegistrosSalida';
import BloquearRegistros from './pages/BloquearRegistros';
import Flujo from './pages/Flujo';
import ControlAuditoria from './pages/ControlAuditoria';
import Productos from './pages/Productos';
import Categorias from './pages/Categorias';
import UnidadMedida from './pages/UnidadMedida';
import TiposMovimientos from './pages/TiposMovimientos';
import Home from './pages/Home';

// Ejemplo de páginas


const drawerWidth = 230;
const miniDrawerWidth = 76;
const drawerHeaderHeight = 48;

// Hook para obtener el título según la ruta
function usePageTitle() {
  const location = useLocation();
  switch (location.pathname.toLowerCase()) {
    case '/registros-entrada' || '/registros-salida' || '/stock-actual'||'/bloquear-registros':
      return 'Registros';
    case '/registros-salida':
      return 'Registros';
    case '/stock-actual':
      return 'Registros';
    case '/bloquear-registros':
      return 'Registros';
    case '/flujo':
      return 'Flujo';
    case '/control-auditoria':
      return 'Configuración';
    case '/productos':
      return 'Configuración';
    case '/categorias':
      return 'Configuración';
    case '/unidad-medida':
      return 'Configuración';
    case '/tipos-movimientos':
      return 'Configuración';
    default:
      return 'Home';
  }
}

function AppContent() {
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
          <Route path="/" element={<Home />} />
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

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
