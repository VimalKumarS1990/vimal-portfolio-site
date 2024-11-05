import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./SwiperCard.css";
import { EffectCards } from "swiper/modules";

const SwiperCard = (props) => {
  const { cardData } = props;

  return (
    <>
      <h2
        className="col-12 m-auto text-center"
        style={{
          textShadow: "2px 2px 2px black",
          paddingBottom: "2rem",
          color: "#C4DAD2",
          textAlign: "center",
        }}
      >
        Projects Worked
      </h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {cardData.map((item, index) => (
          <SwiperSlide className="glow" key={index}>
            <div>{item.projName}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCard;
