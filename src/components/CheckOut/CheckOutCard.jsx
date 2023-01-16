import DeleteIcon from "@mui/icons-material/Delete";
import { Divider, Paper, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useToastContext } from "../../context/ToastContext";
import { REMOVE_ALL } from "../../reducers/shoppingCartSlice";
import CartActions from "../CartActions";
import Toast from "../Toast";

export default function CheckOutCard({ prod }) {
  const { handleToast, msg, type } = useToastContext();
  const dispatch = useDispatch();
  const { image, price, name, cat, inCart, quantity } = prod;

  return (
    <Paper
      elevation={6}
      sx={{
        alignItems: "center",
        border: "0.5px solid #E6E9EA",
        width: "100%",
        height: "250px",
        padding: "40px 10px 10px 10px",
        backgroundColor: "whitesmoke",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Typography
          variant="body1"
          color="initial"
          style={{ fontStyle: "small-caps" }}
        >
          Subtotal:
        </Typography>
        <Typography
          variant="body1"
          color="error"
          sx={{ font: "20px small-caps bold " }}
        >
          ${price * inCart}
        </Typography>
      </Stack>

      <Stack
        spacing={1}
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        sx={{ backgroundColor: "white" }}
      >
        <CardHeader title="Product" subheader={`In Stock: ${quantity}`} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              width: "20%",
              height: "100px",
              marginTop: "5px",
            }}
            image={image}
            alt={name}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {cat.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
              onClick={() => {
                dispatch(REMOVE_ALL({ prod: prod }));
                handleToast("success", "Product deleted succesfully!!");
              }}
            >
              <DeleteIcon className="cartActions" fontSize="medium" />
            </IconButton>
          </CardActions>
        </Stack>
        <Toast type={type} msg={msg} />
      </Stack>
    </Paper>
  );
}
