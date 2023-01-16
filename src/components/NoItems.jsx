import { CardMedia, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import img from "../assets/images/empty-supermarket-cart.jpg";

const style = {
  position: "absolute",
  top: "20%",
  left: "38%",
};

const NoItems = () => {
  return (
    <Stack
      className="fade"
      justifyContent="center"
      alignItems="center"
      sx={style}
      spacing={3}
    >
      <CardMedia
        component="img"
        sx={{
          objectFit: "contain",
          height: "100px",
          width: "100px",
          marginTop: "1rem",
          borderRadius: "50%",
        }}
        image={img}
        alt="Empty Cart"
      />
      <Typography align="center" gutterBottom variant="h6">
        Sorry the shopping cart is empty!!
      </Typography>
    </Stack>
  );
};

export default NoItems;
