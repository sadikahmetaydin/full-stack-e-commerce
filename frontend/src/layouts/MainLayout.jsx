import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Proptypes from "prop-types";

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;

MainLayout.prototype = {
  children : Proptypes.node
}