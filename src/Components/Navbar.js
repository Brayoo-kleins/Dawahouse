import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          
          <Link to="/" className="navbar-brand">
            <b>Pharmacy</b>
          </Link>

          {/* collapsable button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarcollapse">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/Signin" className="nav-link">Signin</Link>
              <Link to="/Signup" className="nav-link">Signup</Link>
              <Link to="/Addproduct" className="nav-link">Addproduct</Link>
              <Link to="/Getproduct" className="nav-link">Getproduct</Link>
              <Link to="/Mpesapayment" className="nav-link">Mpesapayment</Link>
            </div>
          </div>

        </nav>
      </div>
    </section>
  );
};

export default Navbar;