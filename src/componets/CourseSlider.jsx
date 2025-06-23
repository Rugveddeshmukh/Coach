import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../Assest/slider7.webp';
import img2 from '../Assest/slider8.webp';
import img3 from '../Assest/slider9.webp';
import img4 from '../Assest/slider1.webp';
import img5 from '../Assest/slider2.webp';
import img6 from '../Assest/slider3.webp';
import img7 from '../Assest/slider4.webp';
import img8 from '../Assest/slider5.webp';
import img9 from '../Assest/slider6.webp';

const courses = [
  { image: img1, title: 'Personal Development' },
  { image: img2, title: 'Graphic Design and Multimedia' },
  { image: img3, title: 'Business and Entrepreneur-ship' },
  { image: img4, title: 'Language Learning' },
  { image: img5, title: 'Photography and Videography' },
  { image: img6, title: 'Cooking and Culinary Art' },
  { image: img7, title: 'Technology and Coding' },
  { image: img8, title: 'Digital Marketing' },
  { image: img9, title: 'Health and Wellness' },
];

const CourseSlider = () => {
  const swiperRef = useRef(null);

  const handleSlideClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (index === courses.length - 1) {
        swiper.slideTo(0); // go to first slide
      } else {
        swiper.slideTo(index);
      }
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #020024 100%, #090979 30%, #000000 100%)',
      padding: '60px 0'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '40px',
        fontFamily: 'Poppins, sans-serif'
      }}>
        Turn Your Passion & Knowledge Into Courses
      </h2>

      <div style={{ width: '85%', margin: '0 auto' }}>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          style={{ paddingBottom: '40px' }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => handleSlideClick(index)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  textAlign: 'center',
                  paddingBottom: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  margin: '10px',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  style={{
                    width: '98%',
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px'
                  }}
                />
                <h3 style={{
                  fontSize: '18px',
                  marginTop: '16px',
                  fontWeight: 'bold',
                  color: '#000',
                  padding: '0 12px',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {course.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom bullet style */}
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: white !important;
            opacity: 0.5;
            margin: 0 6px;
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            background-color: #fff !important;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default CourseSlider;
