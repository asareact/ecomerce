import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const CheckOutBTN = () => {
  return (
    <Button
      className="cartActions"
      component={Link}
      to={ROUTES.CHECKOUT_STEPS}
      variant="contained"
      color="error"
    >
      <AttachMoneyIcon />
      <strong color="error">Check Out</strong>
    </Button>
  );
};
