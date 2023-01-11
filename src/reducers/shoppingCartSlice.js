import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  totalPrice: 0,
  products: [],
  productToCheck: [],
  currentProduct: {},
};

let restCounter = 0;

export const shoppingCartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    GET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    ADD_OR_REMOVE: (state, action) => {
      const { prod, add } = action.payload;

      restCounter = add ? 0 : (restCounter += prod.price);

      //!modifico las propiedades inCart y quantity en dependecia de si sumo o resto asi como el precio total
      //!luego se annade el nuevo producto con las propiedades actualizadas al arreglo de productos

      const product = {
        ...prod,
        inCart: add ? prod.inCart + 1 : prod.inCart - 1,
        quantity: add ? prod.quantity - 1 : prod.quantity + 1,
      };
      const productMap = state.products.map((prod) =>
        prod.id === product.id ? product : prod
      );

      const productMapToCheck = state.productToCheck.map((prod) =>
        prod.id === product.id ? product : prod
      );
      state.productToCheck = productMapToCheck;
      state.products = productMap;

      //!Si estas restando el inCart a un producto y llegue a 0 se elimina del carrito
      if (!add && product.inCart === 0) {
        const deleteProductFilterArray = state.productToCheck.filter(
          (product) => product.id !== prod.id
        );

        state.productToCheck = deleteProductFilterArray;
        state.counter = state.productToCheck.length;
        state.totalPrice = state.totalPrice - restCounter;
        restCounter = 0;
      }
    },
    ADD_TO_CART: (state, action) => {
      const { prod } = action.payload;

      //!se busca si el producto se encuentra en el carrito
      const findProduct = state.productToCheck.find(
        (product) => product.id === prod.id
      );

      //!Si la variable devuelve undefined es que el producto no se encuentra en el carrito por lo que suma el counter y se annade, sino

      //!Si devuelve un valor es q ya se encuentra x lo tanto solo hay q actualizar la cantidad in Cart del producto q ya esta con la cantidad que trae
      //!este mismo producto

      if (!findProduct) {
        state.productToCheck = [prod, ...state.productToCheck];
        state.counter = state.productToCheck.length;
      } else {
        findProduct.inCart = prod.inCart;
      }

      const addedProductsTotalPrice = state.productToCheck.reduce(
        (total, product) => (total += product.price * product.inCart),
        0
      );

      state.totalPrice = addedProductsTotalPrice;
    },
    REMOVE_ALL: (state, action) => {
      const { prod } = action.payload;
      const deleteProductFilterArray = state.productToCheck.filter(
        (product) => product.id !== prod.id
      );
      state.productToCheck = deleteProductFilterArray;
      state.counter = deleteProductFilterArray.length;
      const addedProductsTotalPrice = state.productToCheck.reduce(
        (total, product) => (total += product.price * product.inCart),
        0
      );
      state.totalPrice = addedProductsTotalPrice;
    },
    CLEAR_CART: (state) => {
      state.productToCheck = [];
      state.counter = 0;
      state.totalPrice = 0;
    },

    VIEW_DETAILS: (state, action) => {
      const { id } = action.payload;
      const findCurrentProd = state.products.find(
        (product) => product.id === id
      );

      if (findCurrentProd) state.currentProduct = findCurrentProd;
    },
  },
});

export const {
  ADD_OR_REMOVE,
  REMOVE_ALL,
  GET_PRODUCTS,
  ADD_TO_CART,
  VIEW_DETAILS,
  CLEAR_CART,
} = shoppingCartSlice.actions;
