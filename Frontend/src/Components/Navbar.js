import React from 'react';

function Navbar() {
  return (
    <>
      <nav style={{ marginTop: '5px' }} className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <img src="images/biyPAY.png" style={{ height: '45px',marginLeft:"162px" }} alt="Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{marginRight:"200px"}} className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a style={{color:"#007bff" , fontWeight:"600"}} className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a style={{color:"#007bff", fontWeight:"600"}} className="nav-link active" aria-current="page" href="/pay">
                  Scan&Pay
                </a>
              </li> <li className="nav-item">
                <a style={{color:"#007bff", fontWeight:"600"}} className="nav-link active" aria-current="page" href="/history">
                  Activity
                </a>
              </li> <li className="nav-item">
                <a style={{color:"#007bff", fontWeight:"600"}} className="nav-link active" aria-current="page" href="/about">
                  About Us
                </a>
              </li> <li className="nav-item">
                <a style={{color:"#007bff", fontWeight:"600"}} className="nav-link active" aria-current="page" href="/contact">
                  Contact
                </a>
              </li>
              {/* Add your other navigation items here */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;