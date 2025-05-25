import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import CartProvider from "./context/CartProvider.jsx";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <CartProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </CartProvider>
  </BrowserRouter>
);
