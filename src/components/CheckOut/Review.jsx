import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import ProductsContext from "../../context/ToastContext";
import { useContext } from "react";
import accounting from "accounting";

export default function Review() {
  const { productToCheck, totalPrice, cardBadge, form, formPayment } =
    useContext(ProductsContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {productToCheck.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.cat} secondary={product.name} />
            <Typography variant="body2">
              {product.price} x {cardBadge}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {accounting.formatMoney(totalPrice)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography
            gutterBottom
          >{`${form.firstName} ${form.lastName}`}</Typography>
          <Typography
            gutterBottom
          >{`${form.address1},${form.city},${form.state},${form.zip},${form.country}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          {
            <Grid container>
              <React.Fragment
                key={`${formPayment.cardNumber}${formPayment.cardName}`}
              >
                <Grid item xs={6}>
                  <Typography gutterBottom>Card name :</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{formPayment.cardName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card number :</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{formPayment.cardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Expiry date :</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{formPayment.expDate}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>CVV :</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{formPayment.cvv}</Typography>
                </Grid>
              </React.Fragment>
            </Grid>
          }
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
