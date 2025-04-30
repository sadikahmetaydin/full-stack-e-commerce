import CampaingSingle from "../components/CampaignSingle/CampaingSingle";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";
import Products from "../components/Products/Products";

const ShopPage = () => {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <CampaingSingle />
      <Products />
      <Footer />
    </>
  );
};

export default ShopPage;
