import './App.css';
import React from 'react';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Admin/Login';
import Donation from './Pages/Donation';
import Setting from './Pages/Admin/Settings';
import AddNGO from './Pages/Admin/AddNGO';
import EditNGO from './Pages/Admin/EditNGO/EditNGO';
import ShowAll from './Pages/Admin/ShowAll';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element=
            {
              <>
                <Navbar />
                <div className='container'>
                  <Dashboard />
                </div>
              </>
            } />
          <Route path="/Donation/:id" element=
            {
              <>
                <Navbar />
                <div className='container'>
                  <Donation />
                </div>
              </>
            } />
          <Route path="/settings" element=
            {
              <>
                <Navbar />
                <div className='container'>
                  <Setting />
                </div>
              </>
            } />
          <Route path="/add-ngo" element=
            {
              <>
                  <Navbar />
                  <div className='container'>
                    <AddNGO />
                  </div>
              </>
            } />
          <Route path="/edit-ngo/:id" element=
            {
              <>
                <Navbar />
                <div className='container'>
                  <EditNGO />
                </div>
              </>
            } />
          <Route path="/show-all" element=
            {
              <>
                <Navbar />
                <div className='container'>
                  <ShowAll />
                </div>
              </>
            } />
          <Route path="/admin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
