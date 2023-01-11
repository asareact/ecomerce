import { AddShoppingCart } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Divider, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { useDispatch } from "react-redux";
import { ADD_OR_REMOVE, ADD_TO_CART } from "../reducers/shoppingCartSlice";

const CartActions = ({ prod }) => {
  const { inCart } = prod;
  const dispatch = useDispatch();

  return (
    <Stack direction="row">
      <IconButton
        className="cartActions"
        disabled={inCart === 0}
        aria-label="Add to Cart"
        onClick={() => dispatch(ADD_TO_CART({ prod: prod }))}
      >
        <AddShoppingCart fontSize="medium" />
      </IconButton>
      <Stack
        direction="row"
        gap="6px"
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ border: " 0.5px solid #E6E9EA", borderRadius: "10px" }}
      >
        <Button
          className="cartActions"
          color="inherit"
          onClick={() => dispatch(ADD_OR_REMOVE({ prod: prod, add: true }))}
          sx={{ minWidth: "max-content", padding: "0" }}
        >
          <AddIcon fontSize="medium" />
        </Button>
        <Typography variant="body1" color="initial">
          {inCart}
        </Typography>
        <Button
          className="cartActions"
          sx={{ minWidth: "max-content", padding: "0" }}
          color="inherit"
          disabled={inCart === 0}
          onClick={() => {
            if (inCart) {
              console.log(inCart);
              dispatch(ADD_OR_REMOVE({ prod: prod, add: false }));
            }
          }}
        >
          <RemoveIcon fontSize="medium" />
        </Button>
      </Stack>
    </Stack>
  );
};

CartActions.propTypes = {
  prod: PropTypes.object,
  inCart: PropTypes.number,
};

export default CartActions;
