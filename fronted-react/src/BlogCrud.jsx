import React, { useEffect, useState } from "react";
import axios from "./api";

function BlogCrud() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editId, setEditId] = useState(null);

  // Load all blogs
  const fetchBlogs = async () => {
    const response = await axios.get("/blogs");
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create or Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId === null) {
      await axios.post("/blogs", form);
      //   alert("Blog created!");
    } else {
      await axios.put(`/blogs/${editId}`, form);
      //   alert("Blog updated!");
    }

    setForm({ name: "", description: "" });
    setEditId(null);
    fetchBlogs();
  };

  // Edit blog
  const handleEdit = async (id) => {
    const res = await axios.get(`/blogs/${id}`);
    setForm({ name: res.data.name, description: res.data.description });
    setEditId(id);
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (window.confirm("Delete this blog?")) {
      await axios.delete(`/blogs/${id}`);
      fetchBlogs();
    }
  };

  return (
    <div style={{ width: "60%", margin: "auto", paddingTop: "30px" }}>
      <h2>{editId ? "Edit Blog" : "Create Blog"}</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          name="name"
          placeholder="Blog Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <textarea
          name="description"
          placeholder="Blog Description"
          value={form.description}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: editId ? "orange" : "green",
            color: "white",
            border: "none",
          }}
        >
          {editId ? "Update" : "Create"}
        </button>
      </form>

      {/* Blog List */}
      <h2>All Blogs</h2>
      <h2>All Datas........</h2>

      {blogs.length === 0 && <p>No blogs found.</p>}

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{blog.name}</h3>
          <p>{blog.description}</p>

          <button
            onClick={() => handleEdit(blog.id)}
            style={{
              background: "blue",
              color: "white",
              padding: "5px 10px",
              marginRight: "10px",
              border: "none",
            }}
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(blog.id)}
            style={{
              background: "red",
              color: "white",
              padding: "5px 10px",
              border: "none",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlogCrud;
