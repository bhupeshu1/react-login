import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';

import Home from "./Home";
import Dashboard from "./Dashboard/index";
import Login from "./login/index";


function App(){
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}


export default App