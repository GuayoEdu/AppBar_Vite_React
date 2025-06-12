import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContent from './hooks/routes';
import { DrawerProvider } from './pages/context/DrawerContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <AppContent />
      </DrawerProvider>
    </BrowserRouter>
  );
}

export default App;
