import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import flLogo from './../../assets/fl-logo.png';
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();

  // const handleRedirect = (_url) => {
  //   navigate(`/${_url}`);
  // };

  return (<nav className="site-navbar px-3">
    <div className="navbar px-4">
      <Link to="/" className="navbar-brand navbar-title">
        <img src={flLogo} alt="FL Logo" />
      </Link>
      <div className="navbar-text d-flex align-items-center">
        <span className='pointer'>
         {/* onClick={() => handleRedirect('login')} */}
          <i className='search-icon'> <AiOutlineSearch/></i>
          <input type="text" className='search-input' placeholder='Search for Employee' />
        </span>
      </div>
    </div>
  </nav>);
};

export default Navbar;
