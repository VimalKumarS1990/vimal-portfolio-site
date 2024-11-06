import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./SwiperCard.css";
import { EffectCards } from "swiper/modules";
import Pill from "../Pill/Pill";

const SwiperCard = (props) => {
  const { cardData } = props;

  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper"
      >
        {cardData.map((item, index) => (
          <SwiperSlide className="glow" key={index}>
            <div classname="col-12 col-md-6 p-4">
              <div className="row justify-content-center pt-5">
                <img
                  src={require(`../../../../assets/images/projects/${item.logo}.png`)}
                  alt={"index-" + item.logo}
                  className="img-fluid rounded client-logo mt-3"
                />
              </div>
              <div className="row mx-5 mt-4">
                <ul
                  className="list-unstyled pb-5"
                  style={{ lineHeight: "18px" }}
                >
                  <li>
                    <p>
                      <span className="header-txt">Client Name: </span>
                      <span className="card-txt">{item.clientName}</span>
                      <small
                        className="loc-txt"
                        style={{
                          marginLeft: "4px",
                        }}
                      >
                        {item.location}
                      </small>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="header-txt">Project Name: </span>
                      <span className="card-txt">{item.projectName}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="header-txt">My Role: </span>
                      <span className="card-txt">{item.role}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="header-txt">Technologies Used: </span>
                      <div
                        className="pt-3"
                        style={{ fontSize: "0.8em !important" }}
                      >
                        <Pill pillData={item.techUsed} />
                      </div>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="header-txt">Description: </span>
                      <div className="description pt-2">{item.description}</div>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
