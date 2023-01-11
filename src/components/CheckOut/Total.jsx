import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { CheckOutBTN } from "../CheckOutBTN";

const Total = () => {
  const counter = useSelector((state) => state.cart.counter);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Stack className="total fade" spacing={2}>
      <Typography align="center" gutterBottom variant="h4">
        {`Total items : ${counter}`}
      </Typography>
      <Typography variant="h3">
        ${totalPrice.toFixed(2).replace("-", "")}
      </Typography>
      <CheckOutBTN />
    </Stack>
  );
};

export default Total;
