import React, { useState } from "react";
import axios from "../api";
import BlogForm from "./BlogForm";
import { useNavigate } from "react-router-dom";

function BlogCreate() {
  const [form, setForm] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/blogs", form);
    navigate("/blogs"); // Navigate back to blog list
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <BlogForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Create"
      />
    </div>
  );
}

export default BlogCreate;
