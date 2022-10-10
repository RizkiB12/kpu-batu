import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddData from "./pages/AddData";
import Schedule from "./pages/Schedule";
import EditProfile from "./pages/EditProfile";
import Employee from "./pages/Employee";
import BlogPost from "./pages/BlogPost";
import EmployeeAdhoc from "./pages/EmployeeAdhoc";
import Home from "./pages/guest/Home";
import PrintEmployeeAdhoc from "./pages/PrintEmployeeAdhoc";
import { AdminRoute, GuestRoute } from "./middleware/AuthRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Guest Route */}
        <Route element={<GuestRoute/>}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin Route */}
        <Route element={<AdminRoute/>}>
          <Route path="/employeeadhoc" element={<EmployeeAdhoc />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adddata" element={<AddData />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/print" element={<PrintEmployeeAdhoc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
