import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddData from "./pages/AddData";
import Schedule from "./pages/Schedule";
import EditProfile from "./pages/EditProfile";
import Employee from "./pages/Employee";
import BlogPost from "./V2/BlogPost/pages/BlogPost";
import EditBlogPost from "./V2/BlogPost/pages/EditBlogPost";
import AddBlogPost from "./pages/AddBlogPost";
import AddEmployee from "./pages/AddEmployee";
import EmpAdhoc from "./V2/EmpAdhoc/pages/EmpAdhoc";
// import Home from "./pages/guest/Home";
import PrintEmployeeAdhoc from "./pages/PrintEmployeeAdhoc";
import { AdminRoute, GuestRoute } from "./middleware/AuthRoute";
import CreateBlogPost from "./V2/BlogPost/pages/CreateBlogPost";

import LandingPage from "./LandingPage/Pages/LandingPage";
import NewsPage from "./LandingPage/Pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/newspage" element={<NewsPage />} />
        {/* Guest Route */}
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin Route */}
        <Route element={<AdminRoute />}>
          <Route path="/employeeadhoc" element={<EmpAdhoc />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adddata" element={<AddData />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/blogpost">
            <Route index element={<BlogPost />} />
            <Route path="create" element={<CreateBlogPost />} />
            <Route path="edit/:idBlogPost" element={<EditBlogPost />} />
          </Route>
          <Route path="/addblog" element={<AddBlogPost />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/print" element={<PrintEmployeeAdhoc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
