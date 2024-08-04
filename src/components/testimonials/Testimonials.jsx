import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import bgImg from "../../assets/testimonials.png";

const bgStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
};

const TestimonialData = [
  {
    id: 1,
    name: "Prithu H.",
    review:
      "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Raghav Goel",
    review:
      "I Believe conducting the course in Hindi Language was the best part. All the concepts were explained in a very simple easy to understand way. The prompt sheets prepared are also very useful for future use. Looking forward for more such creative courses by Dhruv.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Harsh ",
    review:
      "The lessons were given and organised in a fantastic way. Dhruv has the capacity to maintain the audience's attention. If you would have included how ChatGPT could be utilized for more coding-related subjects, it would be more beneficial to me personally. But I am aware that this course needs to be more inclusive to appeal to all students.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Prithu H.",
    review:
      "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Keyur Kumbhare",
    review:
      "This course proved to be a game changer and helped me a lot in killing by habit of procrastination. Really enjoyed the whole vibe of the course and how Dhruv kept it short and simple without missing anything. Thank you!",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Krishnapreet ",
    review:
      "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Prithu H.",
    review:
      "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Keyur Kumbhare",
    review:
      "This course proved to be a game changer and helped me a lot in killing by habit of procrastination. Really enjoyed the whole vibe of the course and how Dhruv kept it short and simple without missing anything. Thank you!",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Krishnapreet ",
    review:
      "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
    rating: 4.5,
  },
];
const Testimonials = () => {
  return (
    <>
      <section
        style={bgStyle}
        className="py-12 md:py-24 bg-[#121212] md:max-h-[2100px] xl:max-h-[1600px] md:overflow-hidden"
      >
        <div></div>
        <div className="flex justify-center py-10 md:py-48 md:-translate-y-72 bg-gradient-to-t from-[#121212] from-50% to-transparent ">
          <button className="mx-8 bg-white text-black text-2xl rounded-xl font-bold px-24 py-5 inline-block w-[500px]">
            See More
          </button>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
