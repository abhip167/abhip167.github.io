import React from "react";
import Image from "next/image";

const skills = [
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "C" },
  { skill: "React" },
  { skill: "Vue" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "Nuxt.js" },
  { skill: "Git" },
  { skill: "SVN" },
  { skill: "Azure" },
  { skill: "AWS" },
  { skill: "Gitlab" },
  { skill: "Jira" },
  { skill: "Jenkins" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Who am I?
            </h1>
            <p className="text-justify">
              <span className="font-bold text-teal-500">
                I am a passionate and motivated software engineer{" "}
              </span>
              with a strong work ethic and a desire to learn and grow. In my
              core, I am a <b> spiritual person</b>, and it{" "}
              <b>energizes me to solve complex problems </b> and build user
              interfaces that make life easier for people.{" "}
            </p>
            <br />
            <p className="text-justify">
              {" "}
              Throughout my career, I have majorly worked on Full stack web
              applications, and Firmware and Desktop Applications in some
              capacity. I am always eager to explore new opportunities that
              allow me to learn and evolve as a developer. Currently, I am
              employed as a{" "}
              <span className="font-bold text-teal-500">
                {" "}
                Software Engineer @ Carleton University{" "}
              </span>
              while also pursuing my Masters in Computer Engineering.{" "}
            </p>
            <br />
            <p className="text-justify">
              As a software engineer, I strongly believe in grasping fundamental
              concepts, as the rest is simply syntax and language. Recognizing
              the future potential of AI and Machine Learning, I actively engage
              in side projects to deepen my expertise in these fields. I am
              tarined to excel in fast-paced environments, delivering results
              from my wonderfull time
              <span className="font-bold text-teal-500">
                {" "}
                @ IDEX Corporation.
              </span>{" "}
              Skilled in managing multiple projects simultaneously, I am adept
              at multitasking.
            </p>
            <br />
            <p className="text-justify">
              My focus is on writing optimized and efficient code. Currently, my
              research centers around web optimization and security, with a goal
              to create informative content.
            </p>
            <br />
            <p className="text-justify">
              When I am not coding, I enjoy cooking and hiking. I do theatres
              and love to sing.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
