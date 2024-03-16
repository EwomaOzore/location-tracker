import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });
    const { firstName, lastName, username, email, password } = formData;
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:5500/api/signup', formData);
            navigate('/login');
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div className='signup-container'>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" value={lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button type="submit">Signup</button>
                <p>
                    Already have an account? <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;