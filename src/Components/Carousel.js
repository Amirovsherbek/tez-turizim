import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import { RegionCarousel } from '../Data/Region';
const Carousels = ({ items }) => {
  return (
    <div style={{width:"70%"}} className='text-center'>
         <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      emulateTouch={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="carousel-button carousel-button-prev"
          >
            <i className="carousel-button-icon fas fa-chevron-left"></i>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="carousel-button carousel-button-next"
          >
            <i className="carousel-button-icon fas fa-chevron-right"></i>
          </button>
        )
      }
    >
      {     RegionCarousel.map(item=>
           <img className='mx-auto rounded-4'  key={item.id} src={item.image} 
           alt={item.title}/>)           
         }
    </Carousel>
    </div>
    
  );
};

export default Carousels;









// import React, { useEffect, useState } from 'react';
// import { RegionCarousel } from '../Data/Region';
// import { GrFormNext,GrFormPrevious } from "react-icons/gr";

// import "../Search/Search.css"
// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(1);
//   function Change(item){
//     console.log("aa")
//    if(item==="prev"){
//     if(currentImageIndex>1){
//       console.log("dan "+currentImageIndex)
//       if(currentImageIndex!==0){
//         setCurrentImageIndex(prev=>prev-1)
//       }
      
//     }
//     if(currentImageIndex===1){
//       setCurrentImageIndex(5)
//     }
//    }
  
//    if(item==="next"){
//     if(currentImageIndex<5){
//       setCurrentImageIndex(next=>next+1)
//     }
//     else if(currentImageIndex===5){
//       setCurrentImageIndex(1)
//     }
//    }
//   }
//   console.log(currentImageIndex)
//   return (
//     <div className='carousel-container '>
//       {
//         RegionCarousel.map(item=>{
//           if(currentImageIndex===item.id){
//             return ( <img className='mx-auto' key={item.id} src={item.image} alt={item.title}/>)
//           }
//         })
//       }

//       <button className=' changeBTN btn_prev' onClick={()=>Change("prev")}><GrFormPrevious/></button>
//       <button className=' changeBTN btn_next' onClick={()=>Change("next")}><GrFormNext/></button>
//     </div>
//   );
// };

// export default Carousel;
