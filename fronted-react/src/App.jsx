import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Dashboard from "./components/Dashboard";
import BlogList from "./components/Blogs";
import BlogCreate from "./components/BlogCreate";
import BlogEdit from "./components/BlogEdit";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  // Maintain login state
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Watch for token changes
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <BrowserRouter>
      {isLoggedIn && <Header />}
      {isLoggedIn && <Sidebar />}

      <div
        style={{
          marginLeft: isLoggedIn ? "220px" : "0",
          marginTop: isLoggedIn ? "70px" : "0",
          minHeight: "80vh",
          padding: "20px",
        }}
      >
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <Login setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/register"
            element={
              !isLoggedIn ? (
                <Register setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          {/* Protected routes */}
          {isLoggedIn && (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/blogs" element={<BlogList />} />
              <Route path="/blogs/create" element={<BlogCreate />} />
              <Route path="/blogs/edit/:id" element={<BlogEdit />} />
            </>
          )}

          {/* Redirect unknown */}
          <Route
            path="*"
            element={
              isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>

      {isLoggedIn && <Footer />}
    </BrowserRouter>
  );
}

export default App;
