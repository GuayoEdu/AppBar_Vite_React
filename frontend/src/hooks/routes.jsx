import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import AppLayout from '../pages/layout/AppLayout';


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

  return (
    <Routes>
      <Route element={<AppLayout title={title}/>}>
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
      </Route>
    </Routes>
  );
}