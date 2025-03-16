// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import BlogData from './Data/BlogData';
import Login from './Components/Login';
import BlogsDetails from './Components/BlogsDetails';
import Signup from './Components/Signup';
import PrivateRoute from './Components/PrivateRoute';
import AddEditBlog from './Components/AddEditBlog';
import Footer from './Components/Footer';
import About from './Components/About';
// import Product from './Components/Product';
function App() {

  const [blogs,setBlogs]=useState(BlogData)
 
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("currentUser")
  );


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home blogs={blogs} setBlogs={setBlogs}/>}/>

      <Route
          path="/add" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AddEditBlog blogs={blogs} setBlogs={setBlogs} />
            </PrivateRoute>
          }
        // element={<AddEditBlog blogs={blogs} setBlogs={setBlogs} />}
        />
          <Route path="/edit/:id"  element={<AddEditBlog blogs={blogs} setBlogs={setBlogs} />}/>  

      <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/About' element={<About/>}/>

      <Route path="/blogs/:id" element={<BlogsDetails blogs={blogs} setBlogs={setBlogs}/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
