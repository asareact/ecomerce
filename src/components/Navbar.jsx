import { ShoppingCart } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Badge, Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";

// Images
import { Stack } from "@mui/system";
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
          <Stack direction={"row"} spacing={3}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#40403C" }}
              className="navbar-icons"
            >
              <AccountCircleIcon />
              <Typography variant="body1" color="#ffd54b">
                SIGN IN
              </Typography>
            </Button>
          </Stack>
          <IconButton aria-label="show cart items">
            <Badge className="fade" badgeContent={counter} color="error">
              <NavLink to={ROUTES.CHECKOUT_PAGE}>
                <ShoppingCart fontSize="large" sx={{ color: "#40403C" }} />
              </NavLink>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
