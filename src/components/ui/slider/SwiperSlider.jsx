import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

export default function SwiperSlider({ items }) {
  return (
    <div className="w-full mr-auto min-w-0 mr-auto">
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="relative pb-10"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-auto">
              <div className="flex flex-col justify-center items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-fit object-cove rounded-3xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
