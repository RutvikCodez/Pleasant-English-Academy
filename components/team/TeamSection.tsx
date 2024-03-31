import React from "react";
import TitleDesc from "../TitleDesc";
import Image from "next/image";
import clsx from "clsx";

const TeamSection = () => {
  const data = [
    {
      name: "Rajput Sir",
      role: "English Language Expert",
      desc: "Rajput Sir has been teaching English for over 10 years and is an expert in English grammar and pronunciation. His classes are engaging and fun, and he always encourages his students to practice speaking.",
      imageurl: "/static/Rutvik.jpg",
    },
    {
      name: "Dhara Mam",
      role: "Certified English Teacher",
      desc: "Dhara mam is a friendly and patient teacher who enjoys helping students improve their English skills. She has a passion for teaching and always creates interesting lessons for her students.",
      imageurl: "/static/Rutvik.jpg",
    },
    {
      name: "Priyanka Mam",
      role: "Experienced English Teacher",
      desc: "Priyanka Mam is a dedicated and experienced English teacher who provides lessons to help students improve their english language skills. She uses interactive materials and engaging activities to make learning English enjoyable.",
      imageurl: "/static/Rutvik.jpg",
    },
    {
      name: "Ritu Mam",
      role: "English Conversation Coach",
      desc: "Ritu Mam is an enthusiastic teacher who specializes in teaching English conversation. She creates a supportive and encouraging environment for her students to practice speaking English with confidence.",
      imageurl: "/static/Rutvik.jpg",
    },
  ];
  return (
    <div className="w-full">
      <div className="bg-gray-950 py-6">
        <div className="container grid items-center gap-4 px-4 text-center md:gap-8 md:px-6">
          <TitleDesc
            desc="Our experienced and friendly teachers are here to help you learn English."
            title="Meet our Team"
          />
        </div>
      </div>
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className="container grid max-w-5xl items-center gap-6 px-4 py-10 text-center lg:grid-cols-2 md:gap-10 md:px-6 lg:py-16 "
          >
            <div className={clsx("order-2 flex flex-col gap-4 md:gap-6",{
                "lg:order-1": i % 2 === 0, 
                "lg:order-2": i % 2 !== 0, 
            })}>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold tracking-tight">{e.name}</h3>
                <p className="inline-block rounded-full bg-gray-900 px-3 py-1 text-sm dark:bg-gray-950">
                  {e.role}
                </p>
              </div>
              <p className="text-gray-500 mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {e.desc}
              </p>
            </div>
            <div className={clsx("order-1 flex justify-center items-center text-center relative w-[400px] h-[500px] max-md:w-[360px] lg:flex-row",{
                "lg:order-2": i % 2 === 0, 
                "lg:order-1": i % 2 !== 0, 
            })}>
              <Image
                alt={e.name}
                className="aspect-[4/5] rounded-xl"
                src={e.imageurl}
                fill
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamSection;
