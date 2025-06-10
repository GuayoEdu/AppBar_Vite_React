import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './hooks/routes';





function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
