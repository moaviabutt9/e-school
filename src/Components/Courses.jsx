import React from 'react'

const Courses = () => {
    return (
        <div>
            <h1 className='courses-heading text-center mb-4'>Online Courses</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 mb-4'>
                        <div className="card h-100">
                            <img src="/course-img1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="course-title card-title">Modern Psychology</h5>
                                <p className="course-subtitle card-text fs-6">Designation</p>
                                <a href="#" className="btn btn-success">Buy Course</a>
                            </div>

                            <div className="card-body">

                                <div className="row text-center text-md-start">

                                    <div className="card-body">

                                        <div className="row align-items-center">

                                            {/* Left */}
                                            <div className="col-md-6 mb-2 mb-md-0">
                                                <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                                                    <img src="/calendar-outline 1.svg" className="course-icon" alt="..." />
                                                    <p className="course-info-text mx-2 mb-0 text-nowrap">Start 20 April, 2021</p>
                                                </div>
                                            </div>

                                            {/* Right */}
                                            <div className="col-md-6">
                                                <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                                                    <img src="/Group.svg" className="course-icon" alt="..." />
                                                    <p className="course-info-text mx-2 mb-0">60 seats</p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 2nd card */}
                    <div className='col-12 col-md-6 col-lg-4 mb-4'>
                        <div className="card h-100">
                            <img src="/course-img2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="course-title card-title">Modern Psychology</h5>
                                <p className="course-subtitle card-text fs-6">Designation</p>
                                <a href="#" className="btn btn-success">Buy Course</a>
                            </div>

                            <div className="card-body">

                                <div className="row align-items-center">

                                    {/* Left */}
                                    <div className="col-md-6 mb-2 mb-md-0">
                                        <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                                            <img src="/calendar-outline 1.svg" className="course-icon" alt="..." />
                                            <p className="course-info-text mx-2 mb-0 text-nowrap">Start 20 April, 2021</p>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                                            <img src="/Group.svg" className="course-icon" alt="..." />
                                            <p className="course-info-text mx-2 mb-0">60 seats</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 3rd card */}
                    <div className='col-12 col-md-6 col-lg-4 mb-4'>
                        <div className="card h-100">
                            <img src="/course-img3.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="course-title card-title">Modern Psychology</h5>
                                <p className="course-subtitle card-text fs-6">Designation</p>
                                <a href="#" className="btn btn-success">Buy Course</a>
                            </div>

                            <div className="card-body">

                                <div className="row align-items-center">

                                    {/* Left */}
                                    <div className="col-md-6 mb-2 mb-md-0">
                                        <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                                            <img src="/calendar-outline 1.svg" className="course-icon" alt="..." />
                                            <p className="course-info-text mx-2 mb-0 text-nowrap">Start 20 April, 2021</p>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                                            <img src="/Group.svg" className="course-icon" alt="..." />
                                            <p className="course-info-text mx-2 mb-0">60 seats</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;


