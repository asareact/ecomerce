import { Badge, Button, CardMedia, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useSelector } from "react-redux";
import CheckOutCard from "./CheckOutCard";
import Total from "./Total";
import img from "../../assets/images/empty-supermarket-cart.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "38%",
};

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
        <Grid item xs={12} sm={8} md={9}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ffd54b" }}
            disabled={totalPrice === 0}
          >
            <strong color="error">Clear Cart</strong>
          </Button>
        </Grid>

        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow className="shoppinCard" />
          <Stack
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
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Total />
        </Grid>
      </Grid>
    </Box>
  );
}
