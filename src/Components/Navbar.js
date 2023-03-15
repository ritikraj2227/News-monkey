import React from "react";

export default function Navbar({ keyword, handleChange }) {
  return (
    <div>
      <nav className="navbar bg-dark fixed-top" data-bs-theme="dark">
        <div className="container-md">
          <h3 className="navbar-brand text-light">NewsMonkey</h3>
          <form className="d-flex" role="search" >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={keyword}
              onChange={(e) => handleChange(e.target.value)}
            />
            
            
          </form>
        </div>
      </nav>
    </div>
  );
}
