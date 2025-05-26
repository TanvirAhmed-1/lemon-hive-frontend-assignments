import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroImg from "../assets/Hero Img/hero1.png";
import Img from "../assets/Hero Img/Logo.png";
import { RiAndroidFill, RiHeart2Fill } from "react-icons/ri";
import { CgGenderMale } from "react-icons/cg";
import { IoEarthSharp } from "react-icons/io5";
import { MdAddLocationAlt, MdOpenInNew } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const CharacterDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => {
        console.error("Fetch error:", err.message);
      });
  }, [id]);

  console.log(data);

  if (!data) return <div className="text-white p-10">Loading...</div>;

  return (
    <div>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-80 absolute inset-0 z-0"></div>
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 z-10">
          <img src={Img} className="w-48" alt="Logo" />
        </div>

        <div>
          <div className="relative z-10 pt-60 flex  justify-center items-center gap-20">
            <div>
              <h1 className="text-3xl text-center mb-5 font-bold">
                {data.name}
              </h1>
              <div className="bg-gradient-to-r from-[#1a749b]  to-[#5db440] p-[3px] rounded-3xl shadow-xl">
                <div className="bg-[#1e1f26] rounded-3xl p-8 text-white text-center w-80">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="mx-auto mb-4 w-full"
                  />

                </div>
              </div>
            </div>
            <div className="border h-96 bg-green-600 border-solid border-green-500"></div>
            {/* right section */}

            <div className="">
              <div className="flex gap-5">
                <div className="bg-gradient-to-r from-[#1a749b]  to-[#5db440] p-[2px] rounded-3xl h-full">
                  <div className=" flex justify-start flex-col items-start bg-[#1e1f26] rounded-3xl p-4 text-white text-center w-52">
                    <div>
                      <RiHeart2Fill className="text-4xl text-[#5db440]" />
                    </div>
                    <p className="text-sm text-gray-500">Status</p>
                    <h1 className="text-white text-lg">{data.status}</h1>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#1a749b]  to-[#5db440] p-[2px] rounded-3xl h-full">
                  <div className=" flex gap-1 justify-start flex-col items-start bg-[#1e1f26] rounded-3xl p-4 text-white text-center w-52">
                    <div>
                      <RiAndroidFill className="text-3xl text-[#5db440]" />
                    </div>

                    <p className="text-sm text-gray-500">Species</p>
                    <h1 className="text-white text-lg">{data.gender}</h1>
                  </div>
                </div>

                <div className="bg-gradient-to-r mb-6 from-[#1a749b]  to-[#5db440] p-[2px] rounded-3xl h-full">
                  <div className=" flex justify-start flex-col items-start bg-[#1e1f26] rounded-3xl p-4 text-white text-center w-52">
                    <div>
                      <CgGenderMale className="text-4xl text-[#5db440]" />
                    </div>

                    <p className="text-sm text-gray-500">Gender</p>
                    <h1 className="text-white text-lg">{data.species}</h1>
                  </div>
                </div>
              </div>

              {/* secend column */}

              <div className="bg-gradient-to-r from-[#1a749b]  to-[#5db440] p-[2px] rounded-3xl">
                <div className="bg-[#1e1f26] rounded-3xl p-4 text-white text-center w-full">
                  <div>
                    <IoEarthSharp className="text-4xl text-[#5db440]" />
                  </div>

                  <p className="text-sm text-start py-2 text-gray-500">
                    Species
                  </p>
                  <div className="flex justify-between items-center">
                    <h1 className="text-white text-lg">{data.species}</h1>
                    <MdOpenInNew className="text-xl text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r my-4 from-[#1a749b]  to-[#5db440] p-[2px] rounded-3xl shadow-xl">
                <div className="bg-[#1e1f26] rounded-3xl p-4 text-white text-center w-full">
                  <div>
                    <MdAddLocationAlt className="text-4xl text-[#5db440]" />
                  </div>

                  <p className="text-sm text-start py-2 text-gray-500">
                    location
                  </p>
                  <div className="flex justify-between items-center">
                    <h1 className="text-white text-lg">
                      {data?.location?.name}
                    </h1>
                    <MdOpenInNew className="text-xl text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1a749b]  to-[#5db440] p-[2px] rounded-3xl shadow-xl">
                <div className="bg-[#1e1f26] rounded-3xl p-4 text-white text-center w-full">
                  <div>
                    <FaBars className="text-4xl text-[#5db440]" />
                  </div>

                  <p className="text-sm  text-start my-2 text-gray-500">
                    Episode ({data.episode.length})
                  </p>
                  <h1 className="text-white text-start text-lg">{data?.location?.name}</h1>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
