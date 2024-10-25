import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Test from './Test.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App;
