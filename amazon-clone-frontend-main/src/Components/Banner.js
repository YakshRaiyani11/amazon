import React, { useState } from "react";
import styled from "styled-components";

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/BAU/Unrec/PC/1._CB567657923_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/August/GW/Olympics/3000_x_1200_Unrec_PC._CB568042317_.png",
 // "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/PageRefresh/DesktopHero/3000._CB612498658_.jpg",
];


function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <BannerContainer>
      <Arrow onClick={handlePrev}>{"<"}</Arrow>
      <img src={images[currentIndex]} alt="banner" />
      <Arrow onClick={handleNext}>{">"}</Arrow>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );
  }

  @media only screen and (max-width: 767px) {
    img {
      -webkit-mask-image: none;
    }
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  font-size: 24px;

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }
`;

export default Banner;
