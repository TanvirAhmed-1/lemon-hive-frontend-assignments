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
      <h1 className="text-">Episodes</h1>
      <div>
        <Slider data={data}></Slider>
      </div>
    </div>
  );
};

export default Episode;
