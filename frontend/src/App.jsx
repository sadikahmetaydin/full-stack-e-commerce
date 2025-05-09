import "./App.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
