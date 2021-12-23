import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from "./screens/home";
import {BlogDetail} from "./screens/blogDetail";
import {Blogs} from "./screens/blogs";
import {About} from "./screens/about";
import {Login} from "./screens/login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={'/blogs'} element={<Blogs />} />
        <Route path={'/blogs/:blogId'} element={<BlogDetail />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/admin'}/>
      </Routes>
    </Router>
  );
}

export default App;
