import React, { useEffect, useState } from 'react';
import { RegionCarousel } from '../Data/Region';
import { GrFormNext,GrFormPrevious } from "react-icons/gr";

import "../Search/Search.css"
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  function Change(item){
    console.log("aa")
   if(item==="prev"){
    if(currentImageIndex>=1){
      setCurrentImageIndex(prev=>prev-1)
    }
   }
   if(item==="next"){
    if(currentImageIndex<5){
      setCurrentImageIndex(next=>next+1)
    }
    else if(currentImageIndex===5){
      setCurrentImageIndex(1)
    }
   }
  }
  console.log(currentImageIndex)
  return (
    <div className='carousel-container '>
      {
        RegionCarousel.map(item=>{
          if(currentImageIndex===item.id){
            return ( <img className='mx-auto' key={item.id} src={item.image} alt={item.title}/>)
          }
        })
      }

      <button className=' changeBTN btn_prev' onClick={()=>Change("prev")}><GrFormPrevious/></button>
      <button className=' changeBTN btn_next' onClick={()=>Change("next")}><GrFormNext/></button>
    </div>
  );
};

export default Carousel;
