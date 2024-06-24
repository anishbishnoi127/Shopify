import React from "react";

const DescriptionSection = () => {

  const descriptions = [
    {
    id: 1,
    imgUrl: "/description1.webp",
    title: "Backed by Science",
    text: "Meticulously researched ingredients, formulated to perfection by our food scientists.",
  },
    {
    id: 2,
    imgUrl: "/description2.avif",
    title: "Well Balanced Nutrition",
    text: "Ideal mix of Proteins, Fats, Carbs; Fiber and 7 essential nutrients that are right for your body.",
  },
    {
    id: 3,
    imgUrl: "/description3.webp",
    title: "High Quality Ingredients",
    text: "Made with naturally sourced ingredients, put together to create a 100% junk free drink.",
  },
    {
    id: 4,
    imgUrl: "/description4.webp",
    title: "Guilt Free Snacking",
    text: "Guilt free food that will always keep your conscience clear.",
  },
]


  return (
    <>
      <div className="desContainer">
        <div className="desWrapper">
          <div className="desLogo">
            {descriptions && descriptions.map((description) => {
              return(
                <div className="desLogoItem" key={description.id}>
                <div>
                <img
                  src={description.imgUrl}
                  alt="desImg"
                  height="250"
                  width="250"
                />
                <h3>{description.title}</h3>
                <p>
                  {description.text}
                </p>
              </div>
            </div>
              )
            })}
          </div>
          
          <div className="desReadHead">
              <h3>NutriRead</h3>
            </div>
          <div className="desRead">
            <div className="desReadItem">
              <div className="desReadItemImg">
                <img src="\ReadItem1.webp" alt="desReadItemImg" className="partialImage" />
              </div>
              <div className="desReadItemNote">
                <a href="#" className="desCardLink">
                  <h2>
                    How Much Protein Should You Have Every Day?
                </h2>
                </a>
                <p>Protein is super important for your body. It's made up of amino acids and helps with muscles, skin, enzymes, hormones, and lots of other essential stuff. It's especially helpful for...
                </p>
              </div>
            </div>
            <div className="desReadItem">
              <div className="desReadItemImg">
                <img src="\ReadItem2.webp" alt="desReadItemImg" className="partialImage"/>
              </div>
              <div className="desReadItemNote">
              <a href="#" className="desCardLink">
                  <h2>
                     Fuel Your Day Right: The Importance of a Nutrie..
                  </h2>
                </a>
                <p>
                  Breakfast has long been hailed as the most important meal of the day, and for good reason. It kickstarts your metabolism, replenishes your glucose levels, and provides essential nutrients to...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionSection;
