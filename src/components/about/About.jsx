import React from "react";
import CourseImg from "../../assets/banner4.png";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import BodyGrains from "../../assets/body-grains.png";

const bgGrainy = {
  backgroundImage: `url(${BodyGrains})`,
  backgroundRepeat: "repeat",
};

const About = () => {
  return (
    <>
      <section className="py-12" style={bgGrainy}>
        <div className="container bg-[#141414] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image section */}
            <div className="relative">
              <img
                src={CourseImg}
                alt=""
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#141414] from-1% to-transparent to-10%"></div>
            </div>
            {/* text content section*/}
            <div className="p-12 py-16 flex flex-col justify-center gap-4">
              <p className="uppercase">about</p>
              <p className="text-3xl font-bold uppercase">Dhruv Rathee</p>
              <p className="text-sm bg-[#292929] rounded-xl py-1 w-fit font-semibold px-4 mt-3">
                A YOUTUBE EDUCATOR, AN ACTIVIST AND A TRAVEL VLOGGER
              </p>
              {/* about description */}
              <p>
                I love making videos. My expertise is in creating informative
                and educational content which provides objective, concise and
                simplified explanations of complex issues on a variety of
                subjects.
              </p>
              <p>
                I strongly believe in speaking truth to power and practice
                promoting progressive values of democracy, freedom, rationalism
                and critical thinking through my videos.
              </p>

              {/* social icons */}
              <div className="flex flex-col md:flex-row items-center gap-3 bg-white/10 px-4 py-3 w-full md:w-fit rounded-3xl">
                <p className="text-lg font-semibold">Find Dhruv on: </p>
                <div className="flex items-center gap-3">
                  <div className="iconStyle">
                    <FaYoutube />
                  </div>
                  <div className="iconStyle">
                    <FaInstagram />
                  </div>
                  <div className="iconStyle">
                    <FaTwitter />
                  </div>
                  <div className="iconStyle">
                    <FaFacebook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
