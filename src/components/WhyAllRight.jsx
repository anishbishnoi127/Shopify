import React from 'react'
import { SlEnergy } from "react-icons/sl";
import { PiPlant } from "react-icons/pi";
import { LuWheatOff } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";


const WhyAllRight = () => {
  return (
    <>
    <div className="whyAllRightContainer">
        <div className='whyAllRightHeading'>
            <h2>Why AllRight?</h2>
        </div>
        <div className="whyAllRightWrapper">
            <div className="whyDetailsWrapper">
                <div className="whyTagLine">
                    <SlEnergy />
                    <h3 className="tagLine">High Nutritional value</h3>
                </div>
                <div className="whyTagLine">
                    <PiPlant />
                    <h3 className="tagLine">Natural sourced Ingredients</h3>
                </div>
                <div className="whyTagLine">
                <LuWheatOff />
                    <h3 className="tagLine">Gluten free Oats</h3>
                </div>
                <div className="whyTagLine">
                <FaRegHeart />
                    <h3 className="tagLine">No Added Preservatives/ Artificial Sweetners</h3>
                </div>
            </div>
            <div className="whyImgWrapper">
                <img src="/banana2.webp" alt="Just These" height="485" width="485"/>
            </div>
        </div>
        </div>
    </>
  )
}

export default WhyAllRight
