import Categories from "./components/Categories/Categories";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Products from "./components/Products/Products";
import Sliders from "./components/Slider/Sliders";
import "./App.css";
import Campings from "./components/Campaings/Campings";
import Blogs from "./components/Blogs/Blogs";
import Brands from "./components/Brands/Brands";
import CampaingSingle from "./components/CampaignSingle/CampaingSingle";

const App = () => {
  return (
    <>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campings />
      <Products />
      <Blogs />
      <Brands />
      <CampaingSingle />
      <Policy />
      <Footer />
    </>
  );
};

export default App;
