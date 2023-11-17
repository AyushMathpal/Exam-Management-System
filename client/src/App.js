import React from 'react';
import {
  BrowserRouter as Router,
Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './components/auth/Login';
import Dashboard from './components/signup/Dashboard'; // Create Dashboard component for the new page

const App = () => {
  return (
    

    <Router>
   <Routes>
   
  <Route path='/login' element={ <Login/>} />
          <Route path="/dashboard" element = {<Dashboard/>} />
        </Routes>
    
    </Router>

  );
};

export default App;