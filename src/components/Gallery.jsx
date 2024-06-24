import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";

const Gallery = () => {
  const galleryVideos = [
    {
      videoURL: "https://youtube.com/shorts/pliRAjJLqWE?si=bBc1xD5vUnh6wIWH",
    },
    {
      videoURL: "https://youtube.com/shorts/8gryCl2ArPQ?si=3k1CVFetJ-rvT2m3",
    },
    {
      videoURL: "https://youtube.com/shorts/uxl91hP0vpA?si=cCEANmY39z06VXia",
    },
  ];

  const [videoIndex, setVideoIndex] = useState(null)

  const handleMouseEnter = (index) =>{
    setVideoIndex(index)
    console.log("index",index)
    console.log("videoIndex",videoIndex)
  }

  const handleMouseLeave = ()=>{
    setVideoIndex(null)
  }

  return (
    <>
      <div className="galleryContainer">
        <div className="galleryWrapper">
          <div className="galleryHeader">
            <h2>Gallery Title</h2>
          </div>
          <div className="galleryCard">
          {galleryVideos &&
            galleryVideos.map((video,index) => {
              console.log(video);
              return (
                
                  <div 
                  className="cardItem"
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  >
                    <ReactPlayer
                      className="galleryPlayer"
                      url={video.videoURL}
                      height="550px"
                      width="300px"
                      playing={videoIndex === index}
                    />
                  </div>
                
              );
            })}
            </div>
          {/* <div className="galleryCard">
            <div className="cardItem">
              <ReactPlayer
                className="galleryPlayer"
                url="https://youtube.com/shorts/pliRAjJLqWE?si=bBc1xD5vUnh6wIWH"
                height="500px"
                width="200px"
              />
            </div>
            <div className="cardItem">
              <ReactPlayer
                className="galleryPlayer"
                url="https://youtube.com/shorts/I29wTuEO9to?si=Vbk0Pdq096nSok9t"
                height="500px"
                width="200px"
              />
            </div>
            <div className="cardItem">
              <ReactPlayer
                className="galleryPlayer"
                url="https://youtube.com/shorts/mZQ9s_tLFPU?si=ZaV7jKYINAsRz3_H"
                height="500px"
                width="200px"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Gallery;
