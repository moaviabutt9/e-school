import React from 'react'
import { useState } from 'react';
import { data, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // page refresh nahi hona chahiye, isliye preventDefault use karte hain
        e.preventDefault();
        // local storage mai data store karna
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        // page clear karna
        navigate('/');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card shadow mt-5'>
                        <div className='card-body'>
                            <h3 className='card-title text-center mb-4'>
                                Sign Up
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required />
                                </div>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                                <div className='mb-3'>
                                    <input type='email' className='form-control' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className='mb-3'>
                                    <input type='password' className='form-control' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className='d-grid'>
                                    <button type='submit' className='btn btn-primary'>Sign Up</button>
                                </div>
                                <p className="text-center mt-3">
                                    Already have an account?
                                    <span
                                        style={{ color: "green", cursor: "pointer" }}
                                        onClick={() => navigate('/login')}
                                    >
                                        Login
                                    </span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;