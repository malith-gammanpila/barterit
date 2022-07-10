import React from 'react';

const Navbar = ({ navTitle }) => {
  return (
    <nav class="navbar navbar-custom">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <span className="navHead">
            BARTER<span className="navHead2">IT</span>
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            {' '}
            <i class="fa-solid fa-bars"></i>
          </span>
        </button>
        <div class="collapse na navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                <span className="na">Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span className="na">Items</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/uploard">
                <span className="na">Uploard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span className="na"> My Trades</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
