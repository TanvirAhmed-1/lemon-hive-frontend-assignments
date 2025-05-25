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
        <div>
            <h1 className="text-">Meet The Cast</h1>
            <div>
             <ImageSlider data={data}></ImageSlider>
            </div>
        </div>
    );
};

export default MeetTheCast;