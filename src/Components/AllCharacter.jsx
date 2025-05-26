import { useEffect, useState } from "react";
import HeroImg from "../assets/Hero Img/hero1.png";
import Img2 from "../assets/Hero Img/Logo.png";
import { Link } from "react-router-dom";

const AllCharacter = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((result) => setData(result.results))
      .then((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${HeroImg})`,
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-80"></div>

          <div className=" absolute top-14 left-1/2 transform -translate-x-1/2 z-10">
            <img src={Img2} className="w-72" alt="" srcset="" />
          </div>
          
          <div className=" relative z-10 pt-60 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-6 px-2 py-20">
            <h1 className="text-xl font-semibold ml-2 absolute  top-[180px] text-sky-500">The Cast</h1>
            {data.map((v) => (
              <Link
                to={`/Character/${v.id}`}
                key={v.id}
                className="p-4 w-auto rounded-lg border-2  border-green-300 rounded-br-[50px] lg:rounded-br-[90px]  bg-[#1e1f26]  text-white"
              >
                <img
                  src={v.image}
                  className=" rounded-xl pb-3 object-cover w-full rounded-b-[20px]"
                  alt={v.name}
                  srcset=""
                />
                <p className="text-lg  font-semibold">{v.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCharacter;
