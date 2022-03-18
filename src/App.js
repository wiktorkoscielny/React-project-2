import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import EmploTodoApp from './components/pages/EmployeePage'
import Home from './components/pages/Home'
import SecondSearchApp from './components/pages/SecondSearchPage'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee-page' element={<EmploTodoApp />} />
        <Route path='/search-page' element={<SecondSearchApp />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
