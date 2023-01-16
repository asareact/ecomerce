import { Button, Typography } from "@mui/material";
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
      disabled={counter === 0}
      sx={{ backgroundColor: "#ffd54b" }}
    >
      <Typography variant="body2" color="initial">
        Check Out
      </Typography>
    </Button>
  );
};
