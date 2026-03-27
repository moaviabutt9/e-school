import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.getItem("email");
    localStorage.getItem("password");
    navigate("/login");
  };
  return (
    <div className="container">
      <h1 className="text-center mt-5">Welcome to the Profile!</h1>
      <p className="text-center mt-3">
        This is a protected page. Only authenticated users can access this.
      </p>
      <button
        className="btn btn-danger mt-2  d-block mx-auto"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
