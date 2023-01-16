import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../reducers/thunks";
import Loader from "../Loader";
import Product from "./Product";

export default function Products() {
  const dispatch = useDispatch();
  const productRedux = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Stack className="grid-padding">
      <Grid container spacing={3}>
        {productRedux.length === 0 ? (
          <Loader />
        ) : (
          productRedux.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
              <Product prod={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Stack>
  );
}
