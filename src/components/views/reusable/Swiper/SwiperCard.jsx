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
            <div className="container p-3 mt-5">
              <div className="row justify-content-center pt-5">
                <img
                  src={require(`../../../../assets/images/projects/${item.logo}.png`)}
                  alt={"index-" + item.logo}
                  className="img-fluid rounded client-logo"
                />
              </div>
              <div className="row pt-3 card-area">
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
    </>
  );
};

export default SwiperCard;
