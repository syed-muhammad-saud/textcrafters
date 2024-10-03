import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './Logo_TC.png';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
      <div className="container-fluid">
        <Link to="/"><img src={logo} alt="TextCrafters Logo" height="70" className="d-inline-block align-text-top" /></Link> {/* Use Link instead of anchor tag */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link> {/* Use Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link> {/* Use Link */}
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'dark'}`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}  
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
