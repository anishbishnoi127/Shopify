import React, { useState } from "react";
import { Link } from "react-router-dom";
import {products} from "./Data"

const FeaturedProducts = ({addToCart}) => {


  const [hoverIndex, setHoverIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoverIndex(index)
  }
  const handleMouseLeave = () =>{
    setHoverIndex(null)
  }


  return (
    <>
      <div className="featureContainer">
        <div className="featureHeadText">
          <h2>Feature Categories</h2>
        </div>
        <div className="featureCard">
          {products && products.map((item,index)=>{
            console.log(item)
            return(
              <div 
              className="featureCardItem"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              >
            
            <Link to={`/product/${item.id}`}>
            <img
              src={hoverIndex === index ? item.hoverImgURL : item.imgURL}
              alt="Food Img"
              height="200px"
              width="180px"
            />
            </Link>
            <div className="saleTag">
              <h6>Sale</h6>
              </div>
              <Link to={`/product/${item.id}`}>
                <h5>{item.title}</h5>
              </Link>

            <h6><span className="cardItemMrp">{item.mrp}</span> &nbsp;&nbsp;
            <span className="cardItemPrice">Rs. {(item.price).toFixed(2)}</span></h6>
            <div>
              <button
              onClick={() => addToCart(item, 1)}
              >Add To Cart</button>
            </div>
          </div>
            )
          })}
          {/* <div className="featureCardItem">
            <img
              src=".\src\Images\productImg1.webp"
              alt="Food Img"
              height="300px"
              width="180px"
            />
            <div>
              <button>Add To Cart</button>
            </div>
          </div>
          <div className="featureCardItem">
            <img
              src=".\src\Images\productImg2.webp"
              alt="Food Img"
              height="300px"
              width="180px"
            />
            <div>
              <button>Add To Cart</button>
            </div>
          </div>
          <div className="featureCardItem">
            <img
              src=".\src\Images\productImg3.webp"
              alt="Food Img"
              height="300px"
              width="180px"
            />
            <div>
              <button>Add To Cart</button>
            </div>
          </div>
          <div className="featureCardItem">
            <img
              src=".\src\Images\productImg4.webp"
              alt="Food Img"
              height="300px"
              width="180px"
            />
            <div>
              <button>Add To Cart</button>
            </div> 
          </div>*/}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
