// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/UserSlice';
import axios from 'axios';
import LoginForm from './LoginForm';
import SignupForm from './Signup';
import '../styles/Login.css';

function Login() {
    const [activePanel, setActivePanel] = useState('sign-in');

    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = (email, password) => {
        dispatch(loginUser({ email, password })).then((result) => {
            if (result.payload) {
                navigate('/profile');
            }
        });
    }

    const handleSignup = async (firstName, lastName, username, email, password) => {
        try {
            await axios.post('http://localhost:5500/api/signup', {
                firstName,
                lastName,
                username,
                email,
                password
            });
            navigate('/login');
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    const togglePanel = () => {
        setActivePanel(activePanel === 'sign-in' ? 'sign-up' : 'sign-in');
    };

    return (
        <div className="container" id="container">
            <div className={`form-container ${activePanel}`}>
                {activePanel === 'sign-up' ? (
                    <SignupForm handleSignup={handleSignup} />
                ) : (
                    <LoginForm handleLoginEvent={handleLoginEvent} loading={loading} error={error} />
                )}
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className={`toggle-panel toggle-left ${activePanel === 'sign-in' ? 'active' : ''}`}>
                        <h1>{activePanel === 'sign-in' ? 'Welcome Back!' : 'Hello, Friend!'}</h1>
                        <p>{activePanel === 'sign-in' ? 'Enter your personal details to use all of site features' : 'Register with your personal details to use all of site features'}</p>
                    </div>
                    <div className={`toggle-panel toggle-right ${activePanel === 'sign-up' ? 'active' : ''}`}>
                        <h1>{activePanel === 'sign-in' ? 'Hello, Friend!' : 'Welcome Back!'}</h1>
                        <p>{activePanel === 'sign-in' ? 'Register with your personal details to use all of site features' : 'Enter your personal details to use all of site features'}</p>
                        <button className="hidden" onClick={togglePanel}>{activePanel === 'sign-in' ? 'Sign Up' : 'Sign In'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;