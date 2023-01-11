import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";
import CheckOutPage from "./components/CheckOut/CheckOutPage";
import Navbar from "./components/Navbar";
import PaperCard from "./components/Products/PaperCard";
import Products from "./components/Products/Products";
import { ROUTES } from "./constants/routes";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductsProvider>
          <Navbar />
          <Routes>
            <Route
              path={ROUTES.HOME}
              element={<Products className="products" />}
            />
            <Route path={ROUTES.CHECKOUT_PAGE} element={<CheckOutPage />} />
            <Route path={ROUTES.CHECKOUT_STEPS} element={<CheckOut />} />
            <Route path={ROUTES.VIEW_DETAILS} element={<PaperCard />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
