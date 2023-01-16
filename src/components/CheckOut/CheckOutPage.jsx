import { Badge, Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToastContext } from "../../context/ToastContext";
import { CLEAR_CART } from "../../reducers/shoppingCartSlice";
import NoItems from "../NoItems";
import Toast from "../Toast";
import CheckOutCard from "./CheckOutCard";
import Total from "./Total";

function FormRow() {
  const productToCheck = useSelector((state) => state.cart.productToCheck);

  return (
    <>
      {productToCheck.map((item) => (
        <Badge key={item.id} badgeContent={item.inCart} color="error">
          <CheckOutCard prod={item} />
        </Badge>
      ))}
    </>
  );
}

export default function CheckOutPage() {
  const { handleToast, msg, type } = useToastContext();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const productsToCheck = useSelector((state) => state.cart.productToCheck);
  const dispatch = useDispatch();

  return productsToCheck.length !== 0 ? (
    <Box sx={{ flexGrow: 1, padding: "2rem", paddingBottom: "52vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={9}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ffd54b" }}
            disabled={totalPrice === 0}
            onClick={() => {
              dispatch(CLEAR_CART());
              handleToast("success", "Cart cleared succesfully!!");
            }}
            className="cartActions"
          >
            <Typography variant="body2" color="initial">
              Clear Cart
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Total />
        </Grid>
      </Grid>
      <Stack sx={{ width: "70%" }} container spacing={5}>
        <FormRow className="shoppinCard fade" />
      </Stack>
      <Toast type={type} msg={msg} />
    </Box>
  ) : (
    <>
      <NoItems />
      <Toast type={type} msg={msg} />
    </>
  );
}
