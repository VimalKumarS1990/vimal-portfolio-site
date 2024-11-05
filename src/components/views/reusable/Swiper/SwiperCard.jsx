import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./SwiperCard.css";
import { EffectCards } from "swiper/modules";

const SwiperCard = (props) => {
  const { cardData } = props;

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {cardData.map((item, index) => (
        <SwiperSlide className="glow">
          <div key={index}>{item.projName}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCard;
