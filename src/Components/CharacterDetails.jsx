import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroImg from "../assets/Hero Img/hero1.png";
import Img from "../assets/Hero Img/Logo.png";
import { RiAndroidFill, RiHeart2Fill } from "react-icons/ri";
import { CgGenderMale } from "react-icons/cg";
import { IoEarthSharp } from "react-icons/io5";
import { MdAddLocationAlt, MdOpenInNew } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import LoadingPage from "./LoadingPage";

const CharacterDetails = () => {

  const [data, setData] = useState(null);
  const { id } = useParams();
  const[loading, setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((result) =>{ setData(result)
        setLoading(false)
      })
      .catch((err) => {
        console.error( err.message);
      });
  }, [id]);


  if (loading) return <LoadingPage></LoadingPage>;
    if (!data) return <div className="flex justify-center items-center">Loading-----</div>;

  return (
    <div>
      <div
        className="hero min-h-screen relative pb-20"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-80 absolute inset-0 z-0"></div>
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 z-10">
          <img src={Img} className="w-48" alt="Logo" />
        </div>

        <div>
          <div className="relative z-10 pt-60 md:flex  justify-center items-center lg:gap-20 md:gap-10">
            <div>
              <h1 className="text-3xl text-center text-sky-500 mb-5 font-bold">
                {data?.name}
              </h1>
              <div className="bg-gradient-to-r from-[#1a749b] to-[#5db440] p-[3px] rounded-3xl w-full max-w-xs mx-auto">
                <div className="bg-[#1e1f26] rounded-3xl p-4 sm:p-6 md:p-8 text-white text-center">
                  <img
                    src={data?.image}
                    alt={data?.name}
                    className="mx-auto mb-4 w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="border hidden md:block md:h-96 lg:h-96 bg-green-600 border-solid border-green-500"></div>
            {/* right section */}
            <div className="p-2">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* 1 */}
                <div className="bg-gradient-to-r from-[#1a749b] to-[#5db440] p-[2px] rounded-xl md:rounded-3xl h-full">
                  <div className="flex gap-1 md:gap-y-2 md:py-6 flex-col items-start bg-[#1e1f26] rounded-xl md:rounded-3xl p-4 text-white lg:w-80 w-full">
                    <RiHeart2Fill className="text-4xl lg:text-6xl text-[#5db440]" />
                    <p className="text-sm md:text-xl text-gray-500">Status</p>
                    <h1 className="text-white text-lg md:text-3xl font-medium">
                      {data.status}
                    </h1>
                  </div>
                </div>

                {/*  2 */}
                <div className="bg-gradient-to-r from-[#1a749b] to-[#5db440] p-[2px] rounded-xl md:rounded-3xl h-auto">
                  <div className="flex flex-col md:gap-y-2 md:py-6 gap-1 items-start bg-[#1e1f26] rounded-xl md:rounded-3xl p-4 text-white w-full">
                    <RiAndroidFill className="text-4xl lg:text-6xl text-[#5db440]" />
                    <p className="text-sm text-gray-500 md:text-xl">Species</p>
                    <h1 className="text-white text-lg md:text-3xl">
                      {data.gender}
                    </h1>
                  </div>
                </div>

                {/* 3 */}
                <div className="bg-gradient-to-r from-[#1a749b] to-[#5db440] p-[2px] rounded-xl md:rounded-3xl h-full">
                  <div className="flex gap-1 md:gap-y-2 md:py-6 flex-col items-start bg-[#1e1f26] rounded-xl md:rounded-3xl p-4 text-white w-full">
                    <CgGenderMale className="text-4xl lg:text-6xl text-[#5db440]" />
                    <p className="text-sm text-gray-500 md:text-xl">Gender</p>
                    <h1 className="text-white text-lg md:text-3xl">
                      {data.species}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Section of right */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#1a749b] to-[#5db440] p-[2px] rounded-xl md:rounded-3xl">
                  <div className="bg-[#1e1f26] rounded-xl md:rounded-3xl p-4 text-white w-full">
                    <IoEarthSharp className="text-4xl lg:text-6xl text-[#5db440]" />
                    <p className="text-sm md:text-xl text-start py-2 text-gray-500">
                      Origin
                    </p>
                    <div className="flex justify-between items-center">
                      <h1 className="text-white text-lg md:text-3xl">{data.species}</h1>
                      <MdOpenInNew className="text-xl  text-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#1a749b] to-[#5db440] p-[2px] rounded-xl md:rounded-3xl">
                  <div className="bg-[#1e1f26] rounded-xl md:rounded-3xl p-4 text-white w-full">
                    <MdAddLocationAlt className="text-4xl lg:text-5xl text-[#5db440]" />
                    <p className="text-sm md:text-xl text-start py-2 text-gray-500">
                      Last Known Location
                    </p>
                    <div className="flex justify-between items-center">
                      <h1 className="text-white text-lg md:text-3xl">
                        {data?.location?.name}
                      </h1>
                      <MdOpenInNew className="text-xl  text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r overflow-auto whitespace-pre from-[#1a749b] to-[#5db440] p-[2px] max-h-[300px]  rounded-xl md:rounded-3xl">
                  <div className="bg-[#1e1f26] rounded-xl md:rounded-3xl p-4 text-white w-full">
                    <FaBars className="text-4xl lg:text-5xl text-[#5db440]" />
                    <p className="text-xl md:text-xl py-5 text-start  text-gray-500">
                      Episode ({data.episode.length})
                    </p>
                    <h1 className="text-white text-lg text-start">
                      {data?.episode?.map((v, i) => (
                        <li key={i}>{v}</li>
                      ))}
                    </h1>
                  </div>
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
