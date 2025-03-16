import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../Css/AddEditBlog.css'

const AddEditBlog = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    author: localStorage.getItem("currentUser"),
    image: "",
    type: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      const existingBlog = blogs.find((blog) => blog.id === parseInt(id));
      if (existingBlog) setBlog(existingBlog);
    }
  }, [id, blogs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Edit blog
      const updatedBlogs = blogs.map((b) =>
        b.id === parseInt(id) ? { ...b, ...blog } : b
      );
      setBlogs(updatedBlogs);
    } else {
      // Add new blog
      const newBlog = { ...blog, id: blogs.length + 1 };
      setBlogs([...blogs, newBlog]);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? "Edit Blog" : "Add Blog"}</h1>

      {/* Title Input */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={blog.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          value={blog.description}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          value={blog.author}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image URL</label>
        <input
          type="text"
          name="image"
          id="image"
          placeholder="Image URL"
          value={blog.image}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="type" className="form-label">Type</label>
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Type (e.g., Lifestyle, Technology)"
          value={blog.type}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {id ? "Update" : "Add"} Blog
      </button>
    </form>
  );
};

export default AddEditBlog;
