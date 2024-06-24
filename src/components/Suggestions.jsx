import React, { useState } from "react";
import { Link } from "react-router-dom";
import {suggestedProducts} from "./Data";

const Suggestions = ({ currentProductId }) => {
  

  const [hoverIndex, setHoverIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoverIndex(index)
  }
  const handleMouseLeave = () =>{
    setHoverIndex(null)
  }

  const filteredProducts = suggestedProducts.filter((item)=>(item.id !== currentProductId))

  // console.log(filteredProducts)

  return (
    <>
      <div className="featureContainer">
        <div className="featureHeadText" style={{paddingTop: "15px"}}>
          <h2>You May Also Like</h2>
        </div>
        <div className="featureCard">
          {filteredProducts && filteredProducts.map((item,index)=>{
            console.log(item)
            return(
              <div 
              className="featureCardItem"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ height: '300px', width: '180px' }}
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
            <span className="cardItemPrice">Rs. {(item.price.toFixed(2))}</span></h6>
            <div>
              {/* <button>Add To Cart</button> */}
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Suggestions;
