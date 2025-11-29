import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api";
import BlogForm from "./BlogForm";

function BlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", description: "" });

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`/blogs/${id}`);
      setForm({ name: res.data.name, description: res.data.description });
    };
    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/blogs/${id}`, form);
    navigate("/blogs"); // Navigate back to blog list
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      <BlogForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Update"
      />
    </div>
  );
}

export default BlogEdit;
