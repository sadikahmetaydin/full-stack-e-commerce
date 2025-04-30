import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaingSingle from "../components/CampaignSingle/CampaingSingle";
import Campings from "../components/Campaings/Campings";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Sliders";

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
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

export default HomePage;
