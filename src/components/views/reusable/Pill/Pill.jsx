import React from "react";
import "./Pill.css";
const Pill = (props) => {
  const { pillData } = props;
  return (
    <>
      {pillData &&
        pillData.map((item, index) => (
          <p key={index} className="badge bg-light text-dark rounded-pill mx-1">
            <span>
              <img
                src={require(`../../../../assets/images/skills/${item.logo}.png`)}
                alt={"img" + index}
                style={{
                  minWidth: item.size || "20px",
                  height: item.size || "20px",
                  marginRight: "6px",
                  marginLeft: item.left,
                }}
              />
            </span>
            {item.name}&nbsp;
          </p>
        ))}
    </>
  );
};

export default Pill;
