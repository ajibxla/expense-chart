import React from "react";
import { useState } from "react";

function Charts({ day, amount, show }) {
  const [hover, setHover] = useState(show);
  const [active, setActive] = useState(show);
  const height = {
    height: `${amount * 3}px`,
  };
  const mouseEnter = () => {
    setHover((prev) => {
      return !prev;
    });
  };

  const mouseLeave = () => {
    setHover((prev) => {
      return !prev;
    });
  };

  //   const handleShow = () => {
  //     if (!show) {
  //       setActive((prev) => {
  //         return !prev;
  //       });
  //     } else setActive(false);
  //   };

  return (
    <div className="bars">
      <div className={`${hover ? `block` : `active`} bar-tag`}>{amount}</div>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        // onClick={handleShow}
        className="chart"
      >
        <div className={` ${active ? `show` : ``} `} style={height}></div>
      </div>
      <p>{day}</p>
    </div>
  );
}

export default Charts;
