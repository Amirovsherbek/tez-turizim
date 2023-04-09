import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="carousel-container" style={{marginTop:"-80px"}}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
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
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 1100, height: 349,borderRadius:"50px"}}>
          slide 0
          <img src="https://s.tez-tour.com/banner/mainBig/2Cyprus_Summer_new23_1170x400_1__1068.jpg"/>
        </div>
        <div style={{ width:1100, height: 349, background: "#065535",borderRadius:"18px" }}>
          slide 1
        </div>
        <div style={{ width: 1100, height: 349, background: "#000000" }}>
          slide 2
        </div>
        <div style={{ width: 1100, height: 349, background: "#133337" }}>
          slide 3
        </div>
        <div style={{ width: 1100, height: 349, background: "#ffc0cb" }}>
          slide 4
        </div>
        <div style={{ width: 1100, height: 349, background: "#ffffff" }}>
          slide 5
        </div>
        <div style={{ width: 1100, height: 349, background: "#ffe4e1" }}>
          slide 6
        </div>
        <div style={{ width: 1100, height: 349, background: "#008080" }}>
          slide 7
        </div>
        <div style={{ width: 1100, height: 349, background: "#ff0000" }}>
          slide 8
        </div>
        <div style={{ width: 1100, height: 349, background: "#e6e6fa" }}>
          slide 9
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;