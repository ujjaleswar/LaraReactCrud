import React, { useEffect, useState } from "react";
import axios from "../api";
import { Link } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this blog?")) {
      await axios.delete(`/blogs/${id}`);
      fetchBlogs();
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2>All Blogs</h2>
        <Link to="/blogs/create" className="btn btn-success">
          + Add Blog
        </Link>
      </div>

      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>sl.no</th>
            <th>Blog Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>
              <td>{blog.name}</td>
              <td>{blog.description}</td>
              <td>
                <Link
                  to={`/blogs/edit/${blog.id}`}
                  className="btn btn-sm btn-primary me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {blogs.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center">
                No blogs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BlogList;
