import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {routes} from "./routes";

function App() {
  return (
    <Router>
      <Routes>
          {
              routes.map((route, index) => {
                  return <Route key={index} path={route.path} element={route.component} />
              })
          }
      </Routes>
    </Router>
  );
}

export default App;