import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movieslist from "../movies-list.json"
import Slider from "react-slick";
import Card from './Card';

function NewMovies() {

    const NewReleaseMovies = Movieslist.filter((data) => data.id === "NewRelease");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className=''>
      <div>
       <h1 className='font-semibold text-xl pb-2 bg-blue-600 text-white'>New Release Hollywood Movies</h1>
      </div>
    <div>
     {/* before book filterdata */}
    <Slider {...settings}>
      {NewReleaseMovies.map((items) =>(
         <Card items={items} key={items.id}/>
       )

     )}
     </Slider>
    </div>
    </div>
   </>
  )
}

export default NewMovies