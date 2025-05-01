import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaingSingle from "../components/CampaignSingle/CampaingSingle";
import Campings from "../components/Campaings/Campings";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Sliders";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Campings />
      <Products />
      <Blogs />
      <Brands />
      <CampaingSingle />
    </>
  );
};

export default HomePage;
