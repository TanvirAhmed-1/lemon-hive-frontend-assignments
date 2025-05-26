import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = ({data}) => {
    return (
        <div className="px-30" >
                  <Swiper
                    navigation
                    spaceBetween={20}
                    modules={[Navigation]}
                    className="mySwiper space-x-10 "
                    breakpoints={{
                      320: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 3,
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
                        className="px-4 py-3  rounded-lg border-2 border-green-300 md:rounded-br-[50px] rounded-br-[30px]    card_style  bg-[#1e1f26]   text-white"
                      >
                        <p className="text-sm py-1 font-normal">{value.episode ||`#${index+1}`}</p>
                        <h4 className="md:text-xl text-sm md:font-semibold line-clamp-1">{value.name}</h4>
                      </SwiperSlide>
                    ))}
                  </Swiper>
        </div>
    );
};

export default Slider;