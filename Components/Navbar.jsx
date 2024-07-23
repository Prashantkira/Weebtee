import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  let navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light d-flex sticky-top p-0 shadow">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="fw-bold text-primary m-0">
            A<span className="text-secondary">ni</span>me
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0 ">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About Us
            </Link>
            <Link to="/shop" className="nav-item nav-link">
              Shop
            </Link>
            <Link to="/admin" className="nav-item nav-link">
              Admin
            </Link>

            <Link to="/contact" className="nav-item nav-link">
              Contact Us
            </Link>
          </div>
          <div className=" d-flex ms-2 align-items-center px-2 px-lg-5">
            <Link
              className="btn-sm-square bg-white rounded-circle ms-3 mx-3"
              to="/search"
            >
              <small className="fa fa-search text-body">&nbsp;</small>
            </Link>
            {/* localStorage and sessionStorage are almost identical and have the same API. The difference is that with sessionStorage , the data is persisted only until the window or tab is closed. With localStorage , the data is persisted until the user manually clears the browser cache or until your web app clears the data. */}
            {localStorage.getItem("login") ? (
              <div className="nav-item dropdown bg-primary">
                <a
                  to="#"
                  className="nav-link dropdown-toggle text-light"
                  data-bs-toggle="dropdown"
                >
                  {localStorage.getItem("name")}
                </a>
                <div className="dropdown-menu fade-up m-0">
                  {localStorage.getItem("role") === "Admin" ? (
                    <Link to="/admin" className="dropdown-item">
                      Profile
                    </Link>
                  ) : (
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>
                  )}
                  {localStorage.getItem("role") === "Buyer" ? (
                    <>
                      <Link to="/cart" className="dropdown-item">
                        Cart
                      </Link>
                      <Link to="/checkout" className="dropdown-item">
                        Checkout
                      </Link>
                    </>
                  ) : (
                    ""
                  )}
                  <button className="dropdown-item" onClick={logout}>
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                className="btn-sm-square bg-white rounded-circle ms-3"
                to="/login"
              >
                <small className="fa fa-user text-body"></small>
              </Link>
            )}
            <Link
              className="btn-sm-square bg-white rounded-circle ms-3"
              to="/cart"
            >
              <small className="fa fa-shopping-bag text-body"></small>
            </Link>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
}
