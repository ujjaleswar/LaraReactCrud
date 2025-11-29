import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import BlogList from "./components/Blogs";
import BlogForm from "./components/BlogForm";
import BlogCreate from "./components/BlogCreate";
import BlogEdit from "./components/BlogEdit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />

      {/* Content area */}
      <div
        style={{
          marginLeft: "220px",
          marginTop: "70px",
          minHeight: "80vh",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/create" element={<BlogCreate />} />
          <Route path="/blogs/edit/:id" element={<BlogEdit />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
