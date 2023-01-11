import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const CheckOutBTN = () => {
  const counter = useSelector((state) => state.cart.counter);
  return (
    <Button
      className="cartActions"
      component={Link}
      to={ROUTES.CHECKOUT_STEPS}
      variant="contained"
      color="error"
      disabled={counter === 0}
    >
      <strong sx={{ backgroundColor: "#ffd54b" }}>Check Out</strong>
    </Button>
  );
};
