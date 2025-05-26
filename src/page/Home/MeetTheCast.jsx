import { useEffect, useState } from "react";
import ImageSlider from "../../Hook/Imageslider";
import { Link } from "react-router-dom";


const MeetTheCast = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
     fetch("https://rickandmortyapi.com/api/character")
     .then(res=>res.json())
     .then(result=>setData(result.results))
     .then(err=>{
        console.log(err.message)
     })
    },[])
    console.log("image",data)
    return (
        <div className="8/12 mx-auto">
          <div className="flex justify-between items-center pb-10">
              <h1 className="text-xl text-white font-medium ">Meet The Cast</h1>
            <Link to={"/AllCharacters"} className="px-6 py-1 text-white rounded-lg border-[#7cf535] border-2 border-solid ">View All</Link>
          </div>
            <div>
             <ImageSlider data={data}></ImageSlider>
            </div>
        </div>
    );
};

export default MeetTheCast;