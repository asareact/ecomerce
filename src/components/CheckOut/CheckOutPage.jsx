import { Badge, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useSelector } from "react-redux";
import CheckOutCard from "./CheckOutCard";
import Total from "./Total";

function FormRow() {
  const productToCheck = useSelector((state) => state.cart.productToCheck);
  return (
    <>
      {productToCheck.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <Badge badgeContent={item.inCart} color="error">
            <CheckOutCard prod={item} />
          </Badge>
        </Grid>
      ))}
    </>
  );
}

export default function CheckOutPage() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Box sx={{ flexGrow: 1, padding: "2rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          {totalPrice !== 0 ? (
            <FormRow className="shoppinCard" />
          ) : (
            <Typography align="center" gutterBottom variant="h4">
              Empty Cart
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Total />
        </Grid>
      </Grid>
    </Box>
  );
}
