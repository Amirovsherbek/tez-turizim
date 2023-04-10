import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { GrFormNext,GrFormPrevious} from "react-icons/gr";
import { RegionCarousel } from "../Data/Region";
function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="carousel-container mx-auto " style={{marginTop:"-80px"}}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "green",
            border: "none",
            borderRadius: "50%",
            color: "#fff200",
            cursor: "pointer",
            fontSize: "29px",
            height: 60,
            lineHeight: 1,
            textAlign: "center",
            width: 60,
            position:"absolute",
            right:"8%",
            
          },
          children: <span style={{color:"#fff200" }}><GrFormNext/></span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "red",
            position:"absolute",
            border: "none",
            borderRadius: "50%",
            color: "#fff200",
            cursor: "pointer",
            fontSize: "29px",
            height: 60,
            lineHeight: 1,
            textAlign: "center",
            width: 60,
            
            left:'5%'
          },
          children: <span className="next"><GrFormPrevious/></span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
            
          },
        ]}
        speed={400}
        easing="linear"
      >
        {
          RegionCarousel.map(item=> <div  style={{ width: 1100, height: 369,position:"relative", borderRadius:"40px",overflow:"hidden"}}>
          <img src={item.image} alt={item.title}/>
        </div>)
        }
      
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
