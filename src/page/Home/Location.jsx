import { useEffect, useState } from "react";
import Slider from "../../Hook/Slider";

const Location = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((result) => setData(result.results))
      .then((err) => err.message);
  }, []);
   console.log("data", data);
  return (
    <div className="">
      <h1 className="text-">Location</h1>
      <div>
        <Slider data={data}></Slider>
      </div>
    </div>
  );
};

export default Location;
