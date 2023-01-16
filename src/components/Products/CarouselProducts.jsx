import CarouselProductCard from "./CarouselProductCard";
import Slider from "react-slick";
import { settings } from "./db";
import { useSelector } from "react-redux";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./productsCarrousel.css";
import Typography from "@mui/material/Typography";

export default function CarouselProducts() {
  const productCarousel = useSelector((state) => state.cart.newProducts);

  return (
    <>
      <Typography
        variant="h3"
        color="initial"
        style={{ fontStyle: "small-caps" }}
      >
        New Products
      </Typography>
      <Slider
        style={{ height: "400px", padding: "5px 0px 0px 10px" }}
        {...settings}
      >
        {productCarousel.map((item) => (
          <CarouselProductCard item={item} key={item.id} />
        ))}
      </Slider>
    </>
  );
}
