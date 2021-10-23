import { Wrapper, SliderImage } from "./LayoutBanner.styles";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    // dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <div>
            <SliderImage src="/조드푸르1.png"></SliderImage>
          </div>
          <div>
            <SliderImage src="/조드푸르2.png"></SliderImage>
          </div>
          <div>
            <SliderImage src="/조드푸르3.png"></SliderImage>
          </div>
          <div>
            <SliderImage src="/조드푸르4.png"></SliderImage>
          </div>
        </Slider>
      </Wrapper>
    </>
  );
}
