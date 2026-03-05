import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="footer py-4 mt-5">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-3 mb-4'>
                            <p>
                                Millions of people of all ages and from around
                                the world are improving their lives with us
                            </p>
                        </div>
                        {/* courses */}
                        <div className='col-6 col-md-3 col-lg-3 mb-4'>
                            <h5 className="mb-3">Course</h5>
                            <ul className='list-unstyled'>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>Business</li>
                                <li>Marketing</li>
                                <li>Engineering</li>
                            </ul>
                        </div>
                        {/* terms */}
                        <div className='col-6 col-md-3 col-lg-3 mb-4'>
                            <h5 className="mb-3">Terms</h5>
                            <ul className='list-unstyled'>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>Business</li>
                                <li>Marketing</li>
                                <li>Engineering</li>
                            </ul>
                        </div>
                        {/* useful link */}
                        <div className='col-6 col-md-3 col-lg-3 mb-4'>
                            <h5 className="mb-3">Useful Link</h5>
                            <ul className='list-unstyled'>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>Business</li>
                                <li>Marketing</li>
                                <li>Engineering</li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-center mt-4'>Copyright © 2020 www.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;



