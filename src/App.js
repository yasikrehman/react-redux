import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counterview from './components/counterView';
import { Updatetext } from './components/Updatetext';
import { UsingReduce } from './components/UsingReduce';
import './style.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counterview />} />
        <Route path="/text/:id" element={<Updatetext />} />
        <Route path="/useReduce" element={<UsingReduce />} />
      </Routes>
    </Router>
  );
}
