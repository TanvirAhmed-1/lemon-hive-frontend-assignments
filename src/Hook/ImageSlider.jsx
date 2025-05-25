import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ImageSlider = ({data}) => {
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
                    {data?.map((value) => (
                      <SwiperSlide
                        key={value.id}
                        className="p-4  w-auto rounded-lg border-2 border-green-300  rounded-br-[50px] card_style bg-[#1e1f26]  text-white"
                      >
                        <img src={value.image} className="rounded-lg pb-3 object-cover w-full" alt="" srcset="" />
                        <p className="text-lg  font-semibold">{value.name}</p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
        </div>
    );
};

export default ImageSlider;