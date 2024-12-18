import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/Layout";
import WorkPage from "./pages/WorkPage";
import BlogsPage from "./pages/BlogsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Admin from "./pages/admin";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:id" element={<BlogsPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          


          
          {/* Admin Panel route */}
        </Route>
        <Route path="admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
