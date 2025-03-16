import '../Css/Home.css'
import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({ blogs, setBlogs }) => {
  return (
    <div className="home-container">
      <h1>All Blogs</h1>
      <div className="d-flex">
        {blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <h5>{blog.title}</h5>
            <Link to={`/blogs/${blog.id}`}>Read More</Link>
            {/* <Link to={`/edit/${blog.id}`}>Edit</Link> */}
            <p><strong>Type:</strong> {blog.type}</p>
            <p>By: {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


