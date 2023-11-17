import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Import the CSS file
import {Link,useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async (e) => {
    
    const formData={
      email:email,
      password:password
    }
    console.log(formData)
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login',formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials:true,
      }
      );

      if (response.status === 200) {
        setErrorMessage('');
         setLoginSuccess(true);
        console.log('Login successful!');
        navigate("/dashboard")

      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <form>
          <div className="inputGroup">
            
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="inputGroup">
           
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="buttonGroup">
            <button type="button" onClick={handleLogin} className="loginButton teacher">
              Login as Teacher
            </button>
            {loginSuccess && (
            <Link to="/dashboard" className="dashboardLink">
              Go to Dashboard
            </Link>
          )}
            <button type="button" onClick={handleLogin} className="loginButton admin">
              Login as Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;