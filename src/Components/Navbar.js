import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4 py-3"
      style={{
        background: "linear-gradient(to right, #0d47a1, #1976d2, #42a5f5)",
      }}
    >
      {/* Brand */}
      <NavLink
        to="/"
        className="navbar-brand fw-bold fs-3 d-flex align-items-center"
      >
        💊 Pharmacy
      </NavLink>

      {/* Toggle Button */}
      <button
        className="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        
        {/* Search Bar */}
        <form className="d-flex mx-auto my-3 my-lg-0 w-50">
          <input
            className="form-control rounded-pill border-0 shadow-sm"
            type="search"
            placeholder="Search medicines..."
          />
        </form>

        {/* Navigation Links */}
        <div className="navbar-nav ms-auto align-items-lg-center gap-2">

          <NavLink
            to="/"
            className="nav-link text-white fw-semibold"
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/Signin"
            className="nav-link text-white fw-semibold"
          >
            🔑 Signin
          </NavLink>

          <NavLink
            to="/Signup"
            className="nav-link text-white fw-semibold"
          >
            📝 Signup
          </NavLink>

          <NavLink
            to="/Addproduct"
            className="nav-link text-white fw-semibold"
          >
            ➕ Add Product
          </NavLink>

          <NavLink
            to="/Getproduct"
            className="nav-link text-white fw-semibold"
          >
            💊 Products
          </NavLink>

          <NavLink
            to="/cart"
            className="nav-link position-relative text-white fw-semibold"
          >
            🛒 Cart

            {/* Cart Badge */}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "10px" }}
            >
              3
            </span>
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;