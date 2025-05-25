import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = ({data}) => {
    return (
        <div>
                  <Swiper
                    navigation
                    spaceBetween={20}
                    modules={[Navigation]}
                    className="mySwiper space-x-10"
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1280: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {data?.map((value, index) => (
                      <SwiperSlide
                        key={value.id}
                        className="p-4  rounded-lg border-2 border-green-300  rounded-br-[50px] card_style  bg-[#1e1f26]   text-white"
                      >
                        <p className="text-sm py-1 font-normal">{value.episode ||`#${index+1}`}</p>
                        <h4 className="text-xl font-semibold">{value.name}</h4>
                      </SwiperSlide>
                    ))}
                  </Swiper>
        </div>
    );
};

export default Slider;