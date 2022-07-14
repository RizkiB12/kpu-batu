import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login'
import Root from './pages/Root'
import Dashboard from './pages/Dashboard';
import { Overview } from './pages/Overview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
