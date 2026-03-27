import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        navigate('/login')
    };
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Welcome to the Dashboard!</h1>
            <p className='text-center mt-3'>This is a protected page. Only authenticated users can access this.</p>
            <button className='btn btn-danger d-block mx-auto mt-4' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
