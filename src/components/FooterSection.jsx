import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerMain">
          <h2>Subscribe to our emails</h2>
          <p>Join our email list for exclusive offers and the latest news. </p>
          <div>
            <div className="emailField">
          <input type="email" placeholder="Email"/>
          <button className="emailArrowBtn"><FaArrowRight /></button>
          </div>
          </div>
        </div>
        <div className="footerFoot">
          <p>
            @ 2024, <a href="#">AllRight </a> <a href="#">Powered by Shopify</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
