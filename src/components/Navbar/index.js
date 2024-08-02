import React, { useState } from 'react';
import './index.css';
import { Link } from "react-router-dom";
import img1 from '../../assets/logoo.png';
import homeIcon from "../../assets/icons/house-chimney.svg";
import galleryIcon from "../../assets/icons/gallery.svg";
import aboutIcon from "../../assets/icons/info.svg";
import userIcon from "../../assets/icons/user-pen.svg";
import menuIcon from "../../assets/icons/apps.svg";
import basketIcon from "../../assets/icons/shopping-basket.svg";
import ordersIcon from "../../assets/icons/list.svg";
import editIcon from "../../assets/icons/pen-nib.svg";

export default function Navbar() {
  const [homeIconState, setHomeIconState] = useState(false);
  const [galleryIconState, setGalleryIconState] = useState(false);
  const [aboutIconState, setAboutIconState] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="navbar">
      <img alt="logo" className="logo" src={img1} />
      <div className="mid-nav-one">
        <Link className='nav-link' to="/">
          <div
            onMouseEnter={() => setHomeIconState(true)}
            onMouseLeave={() => setHomeIconState(false)}
            className="mid-nav-one-i"
          >
            <img className="nav-icon" src={homeIcon} alt="home-icon" />
            <p className={`icon-name ${homeIconState ? "anmt-icon" : ""}`}>
              {homeIconState ? "Home" : ""}
            </p>
          </div>
        </Link>
        <Link className='nav-link' to="/gallery">
          <div
            onMouseEnter={() => setGalleryIconState(true)}
            onMouseLeave={() => setGalleryIconState(false)}
            className="mid-nav-one-i"
          >
            <img className="nav-icon" src={galleryIcon} alt="gallery-icon" />
            <p className={`icon-name ${galleryIconState ? "anmt-icon" : ""}`}>
              {galleryIconState ? "Gallery" : ""}
            </p>
          </div>
        </Link>
        <Link className='nav-link' to="/about">
          <div
            onMouseEnter={() => setAboutIconState(true)}
            onMouseLeave={() => setAboutIconState(false)}
            className="mid-nav-one-i"
          >
            <img className="nav-icon" src={aboutIcon} alt="about-icon" />
            <p className={`icon-name ${aboutIconState ? "anmt-icon" : ""}`}>
              {aboutIconState ? "About" : ""}
            </p>
          </div>
        </Link>
      </div>
      <div
        className="mid-nav-two"
        onMouseEnter={() => setMenuState(true)}
        onMouseLeave={() => setMenuState(false)}
      >
        <img
          className={`mid-nav-icon menu-icon ${menuState ? 'menu-move-down' : ''}`}
          src={menuIcon}
          alt="menu-icon"
        />
        <Link className={`mid-nav-icon nav-background ${menuState ? 'menu-move-down' : 'hide'}`} to="/">
          <div
            onMouseEnter={() => setHomeIconState(true)}
            onMouseLeave={() => setHomeIconState(false)}
            className="mid-nav-one-i"
          >
            <img className="nav-icon" src={homeIcon} alt="home-icon" />
            <p className={`icon-name ${homeIconState ? "anmt-icon" : ""}`}>
              {homeIconState ? "Home" : ""}
            </p>
          </div>
        </Link>
        <Link className={`mid-nav-icon nav-background ${menuState ? 'menu-move-down' : 'hide'}`} to="/gallery">
          <div
            onMouseEnter={() => setGalleryIconState(true)}
            onMouseLeave={() => setGalleryIconState(false)}
            className="mid-nav-one-i"
          >
            <img className="nav-icon" src={galleryIcon} alt="gallery-icon" />
            <p className={`icon-name ${galleryIconState ? "anmt-icon" : ""}`}>
              {galleryIconState ? "Gallery" : ""}
            </p>
          </div>
        </Link>
        <Link className={`mid-nav-icon nav-background ${menuState ? 'menu-move-down' : 'hide'}`} to="/about">
          <div
            onMouseEnter={() => setAboutIconState(true)}
            onMouseLeave={() => setAboutIconState(false)}
            className="mid-nav-one-i"
          >
            <img className="nav-icon" src={aboutIcon} alt="about-icon" />
            <p className={`icon-name ${aboutIconState ? "anmt-icon" : ""}`}>
              {aboutIconState ? "About" : ""}
            </p>
          </div>
        </Link>
      </div>

      <div>
        <img className="nav-icon" src={basketIcon} alt="basket-icon" />
      </div>
      <div
        className='icon-stack'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`icon ${hovered ? 'move-down' : ''}`}>
          <img id="profile" className="user-icon" src={userIcon} alt="user-icon" />
          <p className='profile-p'>Profile</p>
        </div>
        <div className={`icon ${hovered ? 'move-down' : 'hide'}`}>
          <Link to ="edit-profile" id="icon-box">
            <img id="user-icon" src={editIcon} alt="edit-icon" />
            <p className='profile-p'>Edit</p>
          </Link>
        </div>
        <div className={`icon ${hovered ? 'move-down' : 'hide'}`}>
          <Link to ="/orders" id="icon-box">
            <img id="user-icon" src={ordersIcon} alt="orders-icon" />
            <p className='profile-p para'>Orders</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
