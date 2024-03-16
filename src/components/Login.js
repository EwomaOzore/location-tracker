import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

function Login({ setAuthenticated }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5500/api/login', formData);
            const { token } = response.data.data;
            localStorage.setItem('token', token);
            setAuthenticated(true);
            navigate('/profile');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input
                    type='email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label>Password:</label>
                <input
                    type='password'
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button type='button' onClick={handleLogin}>
                    Login
                </button>
            </form>
            <p>
                Don't have an account? <Link to='/signup'>Sign up</Link>
            </p>
        </div>
    );
}

export default Login;