import React from "react";
import { BsStars } from "react-icons/bs";

const MainSection = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="mainCard">
          <div className="firstMainCard">
            <h2>Fuel Your Day with Nutritious Breakfast Meals!</h2>
            <button className="mainButton">Shop Now</button>
          </div>
          <div className="secondMainCard">
            {/* <img src="https://plus.unsplash.com/premium_photo-1700053460290-f47d0726e7db?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bnV0cmlvbnMlMjBmb29kfGVufDB8fDB8fHww" alt="Food Img" /> */}
            <img src="\sgic.webp" alt="Food Img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
