import { Link } from "react-router-dom";

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

            <Link to="/login" className="btn btn-success">
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
