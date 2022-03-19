import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {Header} from "./components/header";
import {Home} from "./pages/Home";
import {BlogList} from "./pages/BlogList";
import {BlogPage} from "./pages/BlogPage";
import {About} from "./pages/About";
import {Login} from "./pages/Login";
import {Admin} from "./pages/Admin/indx";

import './App.css';
import {Gallery} from "./pages/Gallery";

function App() {
  const [isHome, setHome] = useState(true)

  return (
    <div className={"app"}>
      <Router>
        <Header
          isHome={ isHome }
          setHome={ setHome }
        />

        <Routes >
          <Route path={"/"} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/gallery'} element={<Gallery />} />
          <Route path={'/blogs'} element={<BlogList />} />
          <Route path={'/blogs/:blogId'} element={<BlogPage />} />

          <Route path={'/login'} element={<Login />} />
          <Route path={'/admin'} element={<Admin />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
