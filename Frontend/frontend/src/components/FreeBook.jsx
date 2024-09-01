import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../assets/list.json";
import Card from "./Card";
function FreeBook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const arrFilter = list.filter((item) => item.category === "Free");
  console.log(arrFilter);
  return (
    <>
      <div className="w-72 md:w-full md:max-w-screen-2xl container mx-auto md:px-20 text-xl font-bold pb-9">
        <div>
          <h1 className="">Free Book</h1>
          <p className="font-normal text-lg text-gray-600 pb-2 mb-9 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quisquam libero quod ipsam exercitationem accusantium officiis ut
            magni et deserunt sapiente ipsum maxime ratione amet fugiat eligendi
            repudiandae animi debitis.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {arrFilter.map((item)=>(
              <Card item = {item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
