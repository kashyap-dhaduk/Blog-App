import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../Css/BlogsDetails.css'

const BlogDetails = ({ blogs, setBlogs }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("currentUser")
  );

  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) return <p>Blog not found!</p>;


  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(filteredBlogs);
  };

  return (
    <div className="blog-details-container">
      <div className="Card">
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} />
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>Description:</strong> {blog.description}</p>

        <Link to="/">Back to Home</Link>
        {
          isLoggedIn ? (
            <>
              <Link to={`/edit/${blog.id}`}>Edit</Link>
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </>
          ) : (
            <Link to='/Login' class="nav-link">Login</Link>
          )
        }

      </div>
    </div>
  );
};

export default BlogDetails;
