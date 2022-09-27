import './App.css';
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import { Detail } from './components/Detail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<CreateForm />} />
      <Route path='/edit/:id' element={<EditForm />} />
      <Route path='/view/:id' element={<Detail />} />
    </Routes>
   
    </>
  );
}

export default App;
