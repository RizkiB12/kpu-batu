import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddData from "./pages/AddData";
import Schedule from "./pages/Schedule";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adddata" element={<AddData />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
