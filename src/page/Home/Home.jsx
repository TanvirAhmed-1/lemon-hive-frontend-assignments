import Episode from "./Episode";
import Hero from "./Hero";
import Location from "./Location";
import image from "../../assets/Hero Img/Spiral Element.png";
import MeetTheCast from "./MeetTheCast";
import { FaRegStar, FaStar } from "react-icons/fa";


const Home = () => {
  return (
    <div>
      <section className="">
        <Hero></Hero>
      </section>

      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className=" bg-no-repeat bg-right overflow-hidden w-full lg:min-h-screen lg:pb-0 pb-20"
      >
        <div className="w-11/12 mx-auto">
          <section>
            <Episode></Episode>
          </section>
          <div className="flex justify-between items-center text-2xl py-5 text-blue-700 max-w-[1300px]">
           <FaStar />
           <FaStar />
          </div>
          <section>
            <Location></Location>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
