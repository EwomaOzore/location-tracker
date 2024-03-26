import React, { useState } from 'react';

const LoginForm = ({ handleLoginEvent, loading, error }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLoginEvent(email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>
                {loading ? 'Loading...' : 'Login'}
            </button>
            {error && (
                <div className='' role='alert'>{error}</div>
            )}
        </form>
    );
};

export default LoginForm;