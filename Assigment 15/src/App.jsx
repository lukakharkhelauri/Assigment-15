import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Navbar } from './components/Navbar';
import { AuthProvider } from './components/UseAuth'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/" element={<> <Navbar /> <Register /> </>}
          />
          <Route
            path="/login" element={<> <Navbar /> <Login /> </> }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;