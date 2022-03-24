import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {BlogList} from "./pages/BlogList";
import {BlogPage} from "./pages/BlogPage";
import {About} from "./pages/About";
import {Login} from "./pages/Login";
import {Admin} from "./pages/Admin/indx";
import {Gallery} from "./pages/Gallery";

import './App.css';

function App() {
  const [isHome, setHome] = useState(true)

  return (
    <div className={"app"}>
      <Router>
        <Header
          isHome={ isHome }
          setHome={ setHome }
        />

        <div className={['page-container', isHome ? 'home' : 'page'].join(" ")}>
          <Routes >
            <Route path={"/"} element={<Home />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/gallery'} element={<Gallery />} />
            <Route path={'/blogs'} element={<BlogList />} />
            <Route path={'/blogs/:blogId'} element={<BlogPage />} />

            <Route path={'/login'} element={<Login />} />
            <Route path={'/admin'} element={<Admin />} />
          </Routes>
        </div>

        <Footer
          isHome={ isHome }
          setHome={ setHome }
        />
      </Router>
    </div>
  );
}

export default App;
