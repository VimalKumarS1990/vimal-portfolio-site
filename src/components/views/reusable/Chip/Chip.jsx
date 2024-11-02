import React from "react";
import "./Chip.css";
const Chip = (props) => {
  const { content } = props;

  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: 0,
          justifyContent: "space-evenly",
          padding: "20px !important",
        }}
        className="row p-2"
      >
        {content.map((item, index) => (
          <li key={index} className="col-6 chip p-1 mt-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Chip;
