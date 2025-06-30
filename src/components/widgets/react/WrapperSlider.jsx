import { useRef, useState } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";

const WrapperSlider = ({
    content,
    imageSlider,
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
        { content.map(({ title, testimonial, name, job, image }, index) => (
          <SwiperSlide key={`slide-${index}`}>
            {imageSlider ? (
                <div className="flex flex-col items-center p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600">
                  {image && (
                    <div className="mb-4">
                      {typeof image === 'string' ? (
                        <Fragment set:html={image} />
                      ) : (
                        <img src={image.src} alt={image.alt} className="w-[305px] h-[340px] object-cover rounded-md" />
                      )}
                    </div>
                  )}
                  <div className="absolute bottom-[15%] left-[14%] btn-primary flex-col p-3 rounded-lg text-left">
                    {name && <p className="text-base font-semibold">{name}</p>}
                    {job && <p className="text-xs text-white w-full">{job}</p>}
                  </div>
                  <div className="absolute top-[10%] right-[10%]">
                    <Icon icon="tabler:brand-linkedin-filled" width="40" height="40" color="white" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600">
                  {title && <h2 className="text-lg font-medium leading-6 pb-4">{title}</h2>}
                  {testimonial && (
                    <blockquote className="flex-auto">
                      <p className="text-muted">" {testimonial} "</p>
                    </blockquote>
                  )}

                  <hr className="border-slate-200 dark:border-slate-600 my-4" />

                  <div className="flex items-center">
                    {image && (
                      <div className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600">
                        {typeof image === 'string' ? (
                          <Fragment set:html={image} />
                        ) : (
                          // <Image
                          //   class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full"
                          //   width={40}
                          //   height={40}
                          //   widths={[400, 768]}
                          //   layout="fixed"
                          //   {...image}
                          // />
                          <img src={image.src} alt={image.alt} className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full" />
                        )}
                      </div>
                    )}

                    <div className="grow ml-3 rtl:ml-0 rtl:mr-3">
                      {name && <p className="text-base font-semibold">{name}</p>}
                      {job && <p className="text-xs text-muted">{job}</p>}
                    </div>
                  </div>
                </div>
              )
            }
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

export default WrapperSlider;
