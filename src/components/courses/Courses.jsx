import React from "react";
import CourseCard from "./CourseCard";
import CourseCard2 from "./CourseCard2";
import CourseCard3 from "./CourseCard3";
import BodyGrains from "../../assets/body-grains.png";

const bgGrainy = {
  backgroundImage: `url(${BodyGrains})`,
  backgroundRepeat: "repeat",
};

const Courses = () => {
  return (
    <>
      <section style={bgGrainy} className="py-12 md:py-24">
        <div className="container">
          {/* Title  */}
          <div className="text-center">
            <p className="text-sm">Courses</p>
            <p className=" text-3xl md:text-4xl font-bold">
              BECOME SKILLED AT WHAT MATTERS
            </p>
          </div>

          {/* Courses  */}
          <CourseCard />
          <CourseCard2 />
          <CourseCard3 />
        </div>
      </section>
    </>
  );
};

export default Courses;
