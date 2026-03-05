import React from 'react'

const Header = () => {
  return (
    <div>
      
<nav className="navbar navbar-expand-md px-4">
    <div className="container-fluid">

        <a className="navbar-brand" href="#">
            <img src="/E-school logo.png" alt="logo" height="40" />
        </a>

        {/* Toggler button (mobile pe show hoga) */}
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Ye collapse system hai */}
        <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto me-4 gap-md-4">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Courses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Others</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                </li>
            </ul>

            <button className="btn btn-success">
                Sign in
            </button>

        </div>
    </div>
</nav>
    </div>
  )
}

export default Header


