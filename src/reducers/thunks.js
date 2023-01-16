import { GET_PRODUCTS } from "./shoppingCartSlice";
import { SET_SIGN } from "./signIN";
import { helpUrl } from "../helpers/helpUrl";

export const getProducts = () => {
  const api = helpUrl();
  const url = "https://fakestoreapi.com/products";

  return async (dispatch, getState) => {
    const res = await api.get(url);
    if (res.err) {
      dispatch(GET_PRODUCTS([]));
    } else {
      /* const json = await res.json(); */
      const productsMap = res.map((product) => ({
        id: product.id,
        cat: product.category,
        name: product.title,
        price: product.price,
        quantity: product.rating.count,
        image: product.image,
        description: product.description,
        rating: product.rating.rate.toFixed(),
        inCart: 0,
      }));

      dispatch(GET_PRODUCTS(productsMap));
    }
  };
};

export const isSigIN = (boolean) => {
  return async (dispatch, getState) => {
    dispatch(SET_SIGN(boolean));
  };
};
