import Episode from "./Episode";
import Hero from "./Hero";
import Location from "./Location";
import image from "../../assets/Hero Img/Spiral Element.png";
import MeetTheCast from "./MeetTheCast";

const Home = () => {
  return (
    <div>
      <section>
        <Hero></Hero>
      </section>

      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className=" bg-no-repeat bg-right overflow-hidden w-full min-h-screen"
      >
        <section>
         <MeetTheCast></MeetTheCast>
        </section>

        <section>
          <Episode></Episode>
        </section>
        <section>
          <Location></Location>
        </section>
      </div>
    </div>
  );
};

export default Home;
