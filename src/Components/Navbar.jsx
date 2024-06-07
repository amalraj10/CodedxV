import React from 'react';
import { FaSearch, FaBell, FaShoppingCart, FaUser, FaRegUserCircle } from 'react-icons/fa';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { IoCartOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Dropdown } from 'react-bootstrap';
import { TbShoppingCartSearch } from 'react-icons/tb';
import { GoGift } from 'react-icons/go';
import { MdHelpOutline, MdOutlinePrivacyTip } from 'react-icons/md';

const NavbarComponent = () => {
  return (
    <Navbar className="custom-navbar">
      <div className="logo">
        <img src="https://i.postimg.cc/5NQQSGvN/45150a17f2a2a1880c0f0e557fa24586.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>
      <div className="icons">
       
        <IoMdNotificationsOutline className="icon"/>
        <IoCartOutline className="icon" />
        <Dropdown className="custom-dropdown">
          <Dropdown.Toggle as="div" id="dropdown-custom-components" className="icon">
            <FaRegUserCircle />
          </Dropdown.Toggle>

          <Dropdown.Menu align="end" className="custom-dropdown-menu">
            <Dropdown.Item href="#/profile"> <FaRegUserCircle /> My Profile</Dropdown.Item>
            <Dropdown.Item href="#/orders"><TbShoppingCartSearch /> Orders</Dropdown.Item>
            <Dropdown.Item href="#/gift-cards"><GoGift /> Gift Cards</Dropdown.Item>
            <Dropdown.Item href="#/help-center"><MdHelpOutline /> Help Center</Dropdown.Item>
            <Dropdown.Item href="#/privacy-policy"><MdOutlinePrivacyTip /> Privacy and Policy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
