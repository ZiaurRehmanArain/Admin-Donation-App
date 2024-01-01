// Login.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let naviagate = useNavigate()
  const handleLogin = () => {
    // Handle login logic here

    if (email == 'admin@admin.com' && password == 'admin123') {
      localStorage.setItem('islogin', true)
      naviagate('/HomePage')
      window.location.reload(false)

    } else {
      toast.error('Please enter Right Email password', {
        position: 'top-right', // Set the position of the toast
        autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Make the toast draggable
        progress: undefined, // Disable the built-in progress bar
      });
    }
  };

  return (
    <div style={{ width: 500, margin: '10% auto', padding: '20px', borderRadius: '10px' }}>
      <ToastContainer />
      <div className="login-container"  >
        <h2 style={{ margin: '0px auto', marginBottom: 30 }}>Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className='my-10'>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div style={{ marginTop: '30px' }}>

            <Button variant="primary" type="button" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Form>
      </div>

    </div>
  );
};

export default Login;
