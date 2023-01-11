import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [productToCheck, setProductToCheck] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({});

  const router = useLocation();

  const flag = useRef(false);

  useEffect(() => {
    const getData = async (url) => {
      const res = await fetch(url);

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
      setProducts(productsMap);
    };

    if (!flag.current) {
      getData("https://fakestoreapi.com/products");
    }

    return () => {
      flag.current = true;
    };
  }, []);

  const findProduct = (id) => {
    const findedProduct = products.find((product) => id === product.id);
    setCurrentProduct(findedProduct);
  };

  const setQuantityAndInCart = (product, isAdd = false) => {
    const p = {
      ...product,
      inCart: isAdd ? product.inCart + 1 : product.inCart - 1,
      quantity: isAdd ? product.quantity - 1 : product.quantity + 1,
    };

    const productMap = products.map((prod) => (prod.id === p.id ? p : prod));

    if (!isAdd && p.inCart === 0) {
      const deleteProductToCheckMap = productToCheck.filter(
        (val) => val.id !== product.id
      );
      setCounter(deleteProductToCheckMap.length);
      setProductToCheck(deleteProductToCheckMap);
    }

    setProducts(productMap);
    if (router.pathname === ROUTES.CHECKOUT_PAGE) {
      const productToCheckMap = productToCheck.map((prod) =>
        prod.id === p.id ? p : prod
      );

      setProductToCheck(productToCheckMap);
    }
  };

  const addToCart = (productToAdd) => {
    let addedProducts = [...productToCheck];

    const findedProd = addedProducts.find(
      (product) => product.id === productToAdd.id
    );

    if (!findedProd) {
      addedProducts = [productToAdd, ...productToCheck];
    } else {
      findedProd.inCart = productToAdd.inCart;
    }

    const addedProductsTotalPrice = addedProducts.reduce(
      (total, product) => (total += product.price * product.inCart),
      0
    );

    setProductToCheck(addedProducts);
    setTotalPrice(addedProductsTotalPrice);

    if (productToCheck.length !== addedProducts.length)
      setCounter(addedProducts.length);

    if (router.pathname === ROUTES.CHECKOUT_PAGE) {
      const settedProducts = [...products];

      const settedProduct = settedProducts.find(
        (product) => product.id === productToAdd.id
      );
      settedProduct.inCart = productToAdd.inCart;
      setProducts(settedProducts);
    }
  };

  const data = {
    products,
    productToCheck,
    counter,
    totalPrice,
    setQuantityAndInCart,
    currentProduct,
    findProduct,
    addToCart,
  };

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

const useProductContext = () => useContext(ProductsContext);

export { ProductsProvider, useProductContext };
export default ProductsContext;
