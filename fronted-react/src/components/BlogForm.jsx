import React from "react";

function BlogForm({ form, handleChange, handleSubmit, buttonText }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Blog Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          className="form-control"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {buttonText}
      </button>
    </form>
  );
}

export default BlogForm;
