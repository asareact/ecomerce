import { Paper } from "@mui/material";
import React from "react";

const CarouselCard = (props) => {
  return (
    <Paper elevation={0}>
      <img
        src={props.item.img}
        alt={props.item.name}
        style={{ width: "100%", height: "60vh", objectFit: "cover" }}
      />
    </Paper>
  );
};

export default CarouselCard;
