import { Search, ShoppingCart } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import { Badge, Button, TextField, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import NavigationMenu from "./NavigationMenu";

// Images
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const style = {
    position: "absolute",
    left: "38%",
  };
  const counter = useSelector((state) => state.cart.counter);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "73px" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#ffd54b" }}>
        <Toolbar>
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <IconButton>
              <NavLink to={ROUTES.HOME}>
                <img src={logo} alt="" className="logo" />
              </NavLink>
            </IconButton>
            <NavigationMenu />
            <Stack
              className={style}
              direction={"row"}
              spacing={1}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <Box
                className="center"
                sx={{
                  backgroundColor: "black",
                  borderRadius: "20%",
                  width: "2rem",
                  height: "2rem",
                }}
              >
                <Search sx={{ color: "white" }} />
              </Box>
              <TextField
                id="Search"
                name="Search"
                label="Search a product..."
                fullWidth
                autoComplete="given-name"
                variant="standard"
                sx={{ width: "500px" }}
              />
            </Stack>
          </Stack>
          <div className="flex" />
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="body2" color="initial">
              Hello Guest !!
            </Typography>
            <IconButton aria-label="show cart items">
              <Badge className="fade" badgeContent={counter} color="error">
                <NavLink to={ROUTES.CHECKOUT_PAGE}>
                  <ShoppingCart fontSize="large" sx={{ color: "black" }} />
                </NavLink>
              </Badge>
            </IconButton>
            <Button component={Link} to={ROUTES.SINGIN}>
              <LoginIcon fontSize="large" sx={{ color: "black" }}></LoginIcon>
              <Typography variant="body2" color="initial">
                Sign In
              </Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
