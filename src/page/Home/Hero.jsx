import HeroImg from "../../assets/Hero Img/hero1.png";
import HeroImg2 from "../../assets/Hero Img/portal.png";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full">
          <h1 className="mb-5 text-5xl font-bold uppercase  flex justify-center items-center gap-5">
            The{" "}
            <span>
              {" "}
              <img
                className="object-cover w-40"
                src={HeroImg2}
                alt=""
                srcset=""
              />
            </span>{" "}
            <span className="text-[#2fe0b8]">rick </span>{" "}
            <span className="text-[#2fe0b8]">&</span>{" "}
            <span className="text-green-400">morty </span> wiki
          </h1>

          <div className="flex items-center justify-center gap-6">
            <button className="bg-gradient-to-r text-white from-[#7cf535] to-[#2bdfbc] hover:from-green-500 hover:to-cyan-500 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform ">
             Watch Now
            </button>
            <p className=" text-sm font-normal md:text-sm max-w-96 text-start text-[#14d2de]">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
