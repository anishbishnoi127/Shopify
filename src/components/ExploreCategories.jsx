import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ExploreCategories = () => {
  const categories = [
    {
      imageUrl: "/ExploreImg1.webp",
      value: "Shop All"
    },
    {
      imageUrl: "/ExploreImg2.webp",
      value: "C.Y.O.C: Choose What You Crave"
    },
    {
      imageUrl: "/ExploreImg3.webp",
      value:  "Giftings"
    },
    {
      imageUrl: "/ExploreImg4.webp",
      value: "Track your Order"
    },
  ];
  
 
  return (
    <>
      <div className="exploreContainer">
        <div className="exploreHeadText">
          <h2>Explore Categories</h2>
        </div>
        <div className="exploreCard">
          {categories &&
            categories.map((category, index) => {
              console.log("category", category.imageUrl);
              return (
                <div className="exploreCardItem" key={index}>
                  <img
                    src={category.imageUrl}
                    alt="Food Img"
                    height="300px"
                    width= "213px"
                  />
                  <div className="exploreCategoryValue">
                    {category.value} <FaArrowRightLong />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ExploreCategories;
