import DeleteIcon from "@mui/icons-material/Delete";
import { Divider, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import * as React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_ALL } from "../../reducers/shoppingCartSlice";
import CartActions from "../CartActions";

export default function CheckOutCard({ prod }) {
  const dispatch = useDispatch();
  const { image, price, name, cat, inCart } = prod;

  console.log(inCart);

  return (
    <Card className="fade" sx={{ maxWidth: 300, minHeight: 250 }}>
      <CardHeader
        title={cat.toUpperCase()}
        sx={{ backgroundColor: "#ffd54b" }}
      />
      <CardMedia
        component="img"
        sx={{
          objectFit: "contain",
          height: "100px",
          marginTop: "5px",
        }}
        image={image}
        alt={name}
      />
      <Stack divider={<Divider orientation="horizontal" flexItem />}>
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: 80 }}
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
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(REMOVE_ALL({ prod: prod }))}
          >
            <DeleteIcon className="cartActions" fontSize="medium" />
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
}
