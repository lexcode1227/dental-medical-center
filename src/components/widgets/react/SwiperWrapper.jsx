import { Children, useRef, useState } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperWrapper = ({
    children,
    slidesPerView = 1,
    breakpoints = {
      992: { slidesPerView: 2 },
      1200: { slidesPerView: 3 }
    },
    autoplay = false,
    loop = false,
    pagination = true,
    spaceBetween = 20,
    className = "",
    paginationClassName = ""
  }) => {
  SwiperCore.use([Pagination, Autoplay]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  const slides = Children.toArray(children);
  
  const swiperConfig = {
    slidesPerView,
    spaceBetween,
    breakpoints,
    loop,
    modules: [Pagination, ...(autoplay ? [Autoplay] : [])],
    onSwiper: (swiper) => setSwiper(swiper),
    ...(autoplay && {
      autoplay: {
        delay: typeof autoplay === 'number' ? autoplay : 3000,
        disableOnInteraction: false,
      }
    }),
    ...(pagination && {
      pagination: {
        type: "bullets",
        el: paginationRef.current,
        clickable: true,
        dynamicBullets: true,
      }
    })
  };

  return (
    <div className={`generic-carousel relative ${className}`}>
      <Swiper {...swiperConfig}>
        {slides.map((child, index) => (
          <SwiperSlide key={`slide-${index}`}>
            {child}
          </SwiperSlide>
        ))}

      </Swiper>
      
      {pagination && (
        <div className="relative flex justify-center mt-4">
          <div
            className={`swiper-pagination !bottom-0 ${paginationClassName}`}
            style={{ width: "100%" }}
            ref={paginationRef}
          />
        </div>
      )}
    </div>
  );
};

export default SwiperWrapper;
