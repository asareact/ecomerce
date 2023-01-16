import React from "react";
import Carousel from "react-material-ui-carousel";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import banner4 from "../assets/images/banner-4.jpg";
import banner5 from "../assets/images/banner-5.jpg";
import banner6 from "../assets/images/banner-6.jpg";

import CarouselCard from "./CarouselCard";

const CarouselBanners = (props) => {
  var items = [
    {
      img: banner1,
    },
    {
      img: banner2,
    },
    {
      img: banner3,
    },
    {
      img: banner4,
    },
    {
      img: banner5,
    },
    {
      img: banner6,
    },
  ];

  return (
    <Carousel sx={{ width: "100%" }}>
      {items.map((item, i) => (
        <CarouselCard key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselBanners;
