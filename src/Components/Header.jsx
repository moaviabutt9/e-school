import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('email') && localStorage.getItem('password');

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    navigate('/login')
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md px-4">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img src="/E-school logo.png" alt="logo" height="40" />
          </Link>

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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/others">
                  Others
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>

            {/* Ride side buttons */}
            {!isAuth ? (
              <Link to="/login" className="btn btn-success">
                Login
              </Link>
            ) : (
              <>
                <Link to="/dashboard" className="btn btn-primary">
                  Dashboard
                </Link>
                 <Link to="/profile" className="btn btn-primary ms-2">
                  Profile
                </Link>
                <button className="btn btn-danger ms-2 mt-2 mt-md-0" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )
            }

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;



