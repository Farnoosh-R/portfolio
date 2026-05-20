import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Navigation, Autoplay  } from "swiper/modules";
import "swiper/css/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function SwiperSlider({ items }) {
  return (
    <div className="w-full mr-auto min-w-0 mr-auto">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
            autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
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
                  className=" object-cove rounded-3xl w-[202px] h-[500px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* navigation */}
      <div className="flex items-center justify-start gap-4 mt-10">
        <button className="custom-prev bg-[var(--brand-primary)] text-white p-2 rounded-lg cursor-pointer">
          <IoChevronForward size={25}/>
        </button>

        <button className="custom-next bg-[var(--brand-primary)] text-white p-2 rounded-lg cursor-pointer">
          <IoChevronBack size={25}/>
        </button>
      </div>
    </div>
  );
}
