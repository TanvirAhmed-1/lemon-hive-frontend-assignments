import HeroImg from "../../assets/Hero Img/hero1.png";
import HeroImg2 from "../../assets/Hero Img/portal.png";
import HeroImg3 from "../../assets/Hero Img/Logo.png";
import HeroImg4 from "../../assets/Hero Img/bubble.png";
import HeroImg5 from "../../assets/Hero Img/balp.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import MeetTheCast from "./MeetTheCast";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70">
          <div className=" pt-10 flex justify-center items-center">
            <img src={HeroImg3} className="w-72" alt="" srcset="" />
          </div>
        </div>

        <div className="hero-content text-neutral-content text-center">
          <div className="w-full">
            <div className=" relative mb-5  text-[100px] font-bold uppercase gap-5">
              <div className="flex gap-x-3 justify-center text_style items-center relative ">
                <p> The</p>
                <span>
                  {" "}
                  <img
                    className="object-cover w-40"
                    src={HeroImg2}
                    alt=""
                    srcset=""
                  />
                </span>
                <span className="text-[#2fe0b8]">rick </span>
                <div className="relative">
                  <span className=" text-[#2fe0b8]">&</span>{" "}
                  <span className="absolute top-[15px] right-0 h-2 w-16 rounded-xl border-white bg-gradient-to-r from-[#7cf535] to-[#2bdfbc]"></span>
                </div>
                <div className="absolute top-[-110px] left-[-170px] opacity-60 ">
                  <img src={HeroImg4} className="w-full" alt="" srcset="" />
                </div>
              </div>
              <div className="absolute top-[40%] right-[-290px] h-44 w-72 rounded-3xl box_shadow  border-white bg-gradient-to-r from-[#7cf535] to-[#2bdfbc] -rotate-45">
                <img src={HeroImg5} className="rotate-90" alt="" srcset="" />
              </div>
              <span className="text-green-400">morty </span> wiki
            </div>

            <div className="flex items-center justify-center gap-6">
              <button className="flex justify-center items-center gap-x-2 bg-gradient-to-r text-white from-[#7cf535] to-[#2bdfbc] hover:from-green-500 hover:to-cyan-500 font-bold px-8 py-2 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform ">
                <IoPlayCircleOutline className="" /> Watch Now
              </button>
              <p className=" text-sm font-normal md:text-sm max-w-96 text-start text-[#14d2de]">
                Brilliant but boozy scientist Rick hijacks his fretful teenage
                grandson, Morty, for wild escapades in other worlds and
                alternate dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-36">
        <MeetTheCast></MeetTheCast>
      </section>
    </div>
  );
};

export default Hero;
