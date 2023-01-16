import { Button, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { VIEW_DETAILS } from "../../reducers/shoppingCartSlice";
import CartActions from "../CartActions";
import newImg from "../../assets/images/new.gif";

const CarouselProductCard = ({ item }) => {
  const { price, rating, name, image } = item;
  const dispatch = useDispatch();
  return (
    <Stack spacing={1} alignItems="center" className="card">
      <Button
        component={Link}
        to={ROUTES.VIEW_DETAILS}
        onClick={() => dispatch(VIEW_DETAILS({ prod: item }))}
      >
        <img className="new" src={newImg} alt="new" />
        <img className="product--image" src={image} alt="product" />
      </Button>
      <p className="price">${price}</p>
      <Rating name="read-only" value={parseInt(rating)} readOnly />
      <Typography variant="body1" color="initial">
        {name}
      </Typography>
      <Stack direction="row">
        <CartActions prod={item} />
      </Stack>
    </Stack>
  );
};

export default CarouselProductCard;
