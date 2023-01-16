import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Divider, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import accounting from "accounting";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import CartActions from "../CartActions";
import { VIEW_DETAILS } from "../../reducers/shoppingCartSlice";

export default function Product({ prod }) {
  const { image, price, name, quantity, rating, cat } = prod;
  const dispatch = useDispatch();

  return (
    <Card className="fade" sx={{ width: 300, minHeight: 300 }}>
      <CardHeader
        title={cat.toUpperCase()}
        subheader={`In stock ${quantity}`}
        sx={{ backgroundColor: "#ffd54b", height: "30px" }}
      />
      <CardMedia
        className="zoom"
        component="img"
        sx={{
          objectFit: "contain",
          height: "100px",
          marginTop: "1rem",
        }}
        image={image}
        alt={name}
      />

      <Stack
        divider={<Divider orientation="horizontal" variant="middle" flexItem />}
      >
        <CardContent>
          <Rating name="read-only" value={parseInt(rating)} readOnly />
          <Divider variant="middle" />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: 80, marginTop: "5px" }}
          >
            {name}
          </Typography>
          <Typography variant="h6" color="textSecundary">
            {accounting.formatMoney(price)}
          </Typography>
        </CardContent>
        <CardActions
          className="center"
          disableSpacing
          sx={{ flexDirection: "row" }}
        >
          <CartActions prod={prod} />
          <Link to={`${ROUTES.VIEW_DETAILS}`}>
            <Button
              color="inherit"
              onClick={() => dispatch(VIEW_DETAILS({ prod: prod }))}
              className="cartActions"
            >
              <VisibilityIcon sx={{ color: "gray" }} />
            </Button>
          </Link>
        </CardActions>
      </Stack>
    </Card>
  );
}
