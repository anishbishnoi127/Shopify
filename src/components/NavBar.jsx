import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";

// import styled from "styled-components";

const NavBar = ({cart}) => {
  console.log("cart from Nav: ", cart)

  const totalQuantity = cart.reduce((sum, item)=>sum+item.quantity,0)

  console.log("totalQuantity",totalQuantity)


  return (
    <>
      <div className="navBarContainer">
        <div className="navHeader">
          <p>Get FREE SHIPPING on orders above Rs 499</p>
        </div>
        <div className="navBarWrapper">
          <div className="navBarIcon">
            <a href="#" className="menuBar">
              <GiHamburgerMenu />
            </a>
          </div>
          <div>
            <Link to="/">
              <img src="\HeaderLogo.webp" alt="HeaderLogo" />
            </Link>
          </div>
          <div className="navBarIcon">
            <div className="navBarIconRight">
              <div className="searchIcon">
              <GoSearch />
              </div>
              <div className="cartIcon">
              <span>
                
              <Link to="/cart">
                {(cart.length === 0)?<IoBagOutline />:<IoBagHandleOutline />}
              </Link>
              </span>
              <div className="showCartQuantity">
                {totalQuantity}
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="highlightText">
          <marquee
            width="100%"
            direction="left"
            height="30px"
            className="rotationText"
          >
            <span>High Protein Meal 🫧</span>
            <span>Rich in fiber 🫧</span>
            <span>Clean ingredients 🫧</span>
            <span>Rich in taste 🫧</span>
            <span>No Nonscences ingredients 🫧</span>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default NavBar;
