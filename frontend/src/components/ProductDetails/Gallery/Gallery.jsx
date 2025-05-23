import { useState } from "react";
import Slider from "react-slick";
import "./Gallery.css";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" data-glide-dir=">" onClick={onClick} style={{zIndex: "2"}}>
        <i className="bi bi-chevron-right"></i>
    </button>
  )
}

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" data-glide-dir="<" onClick={onClick} style={{zIndex: "2"}}>
        <i className="bi bi-chevron-left"></i>
    </button>
  )
}

const Gallery = ({ singleProduct }) => {

  const [activeImg, setActiveImg] = useState({
    img: singleProduct.img[0],
    imgIndex: 0
  });

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  }

  return (
    <div className="product-gallery">
        <div className="single-image-wrapper">
            <img src={`${activeImg.img}`} id="single-image" alt="" />
        </div>
        <div className="product-thumb">
            <div className="glide__track" data-glide-el="track">
              <ol className="gallery-thumbs glide__slides">
                <Slider {...sliderSettings}>
                    {
                      singleProduct.img.map((itemImg, index) => (
                        <li className="glide__slide glide__slide--active" key={index} onClick={() => setActiveImg({ img: itemImg, imgIndex: index })}>
                          <img src={`${itemImg}`} alt="" className={`img-fluid ${itemImg === activeImg ? "active" : ""}`}/>
                        </li>
                      ))
                    }
                </Slider>
              </ol>
            </div>
        </div>
    </div>
  )
}
export default Gallery