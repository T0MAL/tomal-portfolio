"use client";
import Image from "next/image";
import Slider from "react-infinite-logo-slider";

const skills = [
  { src: "/skills/c.png", title: "C" },
  { src: "/skills/cpp.png", title: "C++" },
  { src: "/skills/git.png", title: "Git" },
  { src: "/skills/java.png", title: "Java" },
  { src: "/skills/js.png", title: "JavaScript" },
  { src: "/skills/mongodb.png", title: "MongoDB" },
  { src: "/skills/mysql.png", title: "MySQL" },
  { src: "/skills/nextjs.png", title: "Next.js" },
  { src: "/skills/oop.png", title: "OOP" },
  { src: "/skills/python.png", title: "Python" },
  { src: "/skills/react.png", title: "React" },
  { src: "/skills/tailwindcss.png", title: "Tailwind CSS" },
];

const SkillSlider = () => {
    return (
      <div>
        <Slider
          width="150px"
          duration={40}
          pauseOnHover={true}
          blurBorders={true}
          blurBoderColor={"#EDFDFF"}
          className="slider-container"
        >
          {skills.map((skill, index) => (
            <Slider.Slide key={index} className="flex flex-col items-center sm:mx-2 md:mx-4">
              <Image
                src={skill.src}
                alt={skill.title}
                className="w-16 h-16 object-cover"
                width={100}
                height={100}
              />
              <p className="mt-2 text-center text-sm font-medium">
                {skill.title}
              </p>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    );
  };
  

export default SkillSlider;
