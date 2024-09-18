/*Alec Malenant
this component will be used to display images in a carousel. The images are passed in as an array of URLs. The component uses the react-slick library to create the carousel.
 The carousel is centered and shows three images at a time. The images are displayed in a card component.
*/

import React, { Component } from "react";
import Slider from "react-slick";
import CarouselCard from "./carousel-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ imageUrls }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 3,
    speed: 500,
    draggable: true,
    focusOnSelect: true,
  };

  const sliderItems = imageUrls.map((imageUrl, index) => (
    <div key={index}>
      <CarouselCard imgURL={imageUrl} />
    </div>
  ));

  return (
    <div className="slider-container">
      <Slider {...settings}>{sliderItems}</Slider>
    </div>
  );
}
