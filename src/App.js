import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';

// import Home from "./Home";
import Dashboard from "./Dashboard/index";
import Login from "./login/index";
import Card from "./Card";
import button from "./Components/Button/Button";

function App(){
  return (
    <div>
      <Card content={true}  />
    </div>
  );
}


export default App