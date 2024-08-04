import React from "react";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import BodyGrains from "../../assets/body-grains.png";

const bgGrainy = {
  backgroundImage: `url(${BodyGrains})`,
  backgroundRepeat: "repeat",
};

const FocusOn = () => {
  return (
    <>
      <section style={bgGrainy}>
        <div></div>
      </section>
    </>
  );
};

export default FocusOn;
