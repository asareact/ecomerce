import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";

// Images
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const counter = useSelector((state) => state.cart.counter);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#ffd54b" }}>
        <Toolbar>
          <IconButton>
            <NavLink to={ROUTES.HOME}>
              <img src={logo} alt="" className="logo" />
            </NavLink>
          </IconButton>
          <div className="flex" />
          <IconButton aria-label="show cart items">
            <Badge className="fade" badgeContent={counter} color="error">
              <NavLink to={ROUTES.CHECKOUT_PAGE}>
                <ShoppingCart fontSize="large" color="primary" />
              </NavLink>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
