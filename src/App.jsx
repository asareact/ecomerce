import { Divider, Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarouselBanners from "./components/CarouselBanners";
import CheckOut from "./components/CheckOut/CheckOut";
import CheckOutPage from "./components/CheckOut/CheckOutPage";
import Navbar from "./components/Navbar";
import CarouselProducts from "./components/Products/CarouselProducts";
import PaperCard from "./components/Products/PaperCard";
import Products from "./components/Products/Products";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";

import { ROUTES } from "./constants/routes";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ToastProvider>
            <Navbar />

            <Routes>
              <Route
                path={ROUTES.HOME}
                element={
                  <Stack
                    spacing={12}
                    divider={
                      <Divider
                        orientation="horizontal"
                        variant="middle"
                        flexItem
                      />
                    }
                  >
                    <CarouselBanners />
                    <CarouselProducts />
                    <Products />
                  </Stack>
                }
              />
              <Route path={ROUTES.CHECKOUT_PAGE} element={<CheckOutPage />} />
              <Route path={ROUTES.CHECKOUT_STEPS} element={<CheckOut />} />
              <Route path={ROUTES.VIEW_DETAILS} element={<PaperCard />} />
              <Route path={ROUTES.SINGIN} element={<SignIn />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </ToastProvider>
        </BrowserRouter>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
