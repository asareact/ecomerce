import { GET_PRODUCTS } from "./shoppingCartSlice";

export const getProducts = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    const productsMap = json.map((product) => ({
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
  };
};
