import { useState } from "react";
import ProductItem from "./ProductItem";
import productsData from "../../data.json";
import Slider from "react-slick";
import "./Products.css";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  )
}

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  )
}

const Products = () => {

  const [products] = useState(productsData);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>

        <div className="product-wrapper product-carousel">
          <Slider {...sliderSettings}>
            {
              products.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))
            }
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
