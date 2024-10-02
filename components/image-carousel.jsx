/*Alec Malenant
this component will be used to display images in a carousel. The images are passed in as an array of URLs. The component uses the react-slick library to create the carousel.
 The carousel is centered and shows three images at a time. The images are displayed in a card component.
*/

import React, { Component } from "react";
import Slider from "react-slick";
import CarouselCard from "./carousel-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

export default function ImageCarousel({ imageUrls }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    speed: 500,
    draggable: true,
    focusOnSelect: true,
    slidesToShow: 2, // Default value
    responsive: [
      {
        breakpoint: 1536, // xl
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200, // lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // sm
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0, // xs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderItems = imageUrls.map((imageUrl, index) => (
    <Box key={index}>
      <CarouselCard imgURL={imageUrl} />
    </Box>
  ));

  return (
    <div className="slider-container">
      <Slider {...settings}>{sliderItems}</Slider>
    </div>
  );
}
