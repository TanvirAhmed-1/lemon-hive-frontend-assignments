import { useEffect, useState } from "react";
import ImageSlider from "../../Hook/Imageslider";


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
            <h1 className="text-xl text-white font-medium pb-10">Meet The Cast</h1>
            <div>
             <ImageSlider data={data}></ImageSlider>
            </div>
        </div>
    );
};

export default MeetTheCast;