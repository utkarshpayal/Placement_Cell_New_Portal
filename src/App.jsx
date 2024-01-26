import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import {
  Home,
  Students,
  StudentDetail,
  Companies,
  AddCompany,
  AddEntry,
  AboutUs,
  ContactUs,
  Login,
} from "./Pages";
import { Header, Footer } from "./Components";
import Cookies from "js-cookie";
import { USERNAME_COOKIENAME } from "./Pages/Login";
import Session2023 from './Pages/Session2023'; 
import Session2022 from './Pages/Session2022';
import Session2021 from './Pages/Session2021';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="" element={<ProtectedRoute />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="students" element={<Students />} />
            <Route path="students/:studentId" element={<StudentDetail />} />
            <Route path="companies" element={<Companies />} />
            <Route path="add-student" element={<AddEntry />} />
            <Route path="add-company" element={<AddCompany />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path='/session-2023' element={<Session2023 />} />
        <Route path='/session-2022' element={<Session2022 />} />
        <Route path='/session-2021' element={<Session2021 />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
const AppLayout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const ProtectedRoute = () => {
  if (isLoggedIn()) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};
const isLoggedIn = () => {
  const user = Cookies.get(USERNAME_COOKIENAME);
  return !!user;
};

export default App;
