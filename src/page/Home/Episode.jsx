import { useEffect, useState } from "react";
import Slider from "../../Hook/Slider";

const Episode = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((result) => setData(result.results))
      .then((err) => err.message);
  }, []);
  // console.log("data", data);
  return (
    <div className="">
      <h1 className="text-xl text-white font-medium pb-4  pt-10">Episodes</h1>
      <div className="">
        <Slider data={data}></Slider>
      </div>
    </div>
  );
};

export default Episode;
