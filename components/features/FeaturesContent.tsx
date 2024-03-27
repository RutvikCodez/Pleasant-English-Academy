import {
    ActivityIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GlobeIcon,
  MessageSquareIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import TitleDesc from "../TitleDesc";

const FeaturesContent = () => {
    const data = [
        {
          icon: <BookOpenIcon className="w-12 h-12" />,
          title: "Language Mastery",
          desc: "Achieve fluency in your English language through immersive learning experiences. Our courses focus on enhancing your speaking and writing skills.",
        },
        {
          icon: <MessageSquareIcon className="w-12 h-12" />,
          title: "Effective Communication",
          desc: "Master the art of effective communication. Our courses are designed to enhance your communication skills in professional settings.",
        },
        {
          icon: <GlobeIcon className="w-12 h-12" />,
          title: "Language Proficiency",
          desc: "Achieve language proficiency with our courses. Develop advanced language skills and excel in your personal and professional life.",
        },
        {
          icon: <UsersIcon className="w-12 h-12" />,
          title: "Cultural Immersion",
          desc: "Immerse yourself in diverse cultures. Our courses provide insights into global perspectives, fostering cultural understanding.",
        },
      ];
      
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="container flex flex-col gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-y-4 text-center">
          <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm dark:bg-gray-800">
            Learn with Us
          </div>
          <TitleDesc
            desc="Our academy offers a comprehensive learning experience for students of all levels. From language courses
            to test preparation, we provide the tools and support to help you achieve fluency and confidence in
            English."
            title="Master the English Language"
            wrapperClass="max-w-[900px]"
          />
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
          {data.map((e, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center space-y-2"
            >
              {e.icon}
              <div className="space-y-2 text-center">
                <h4 className="text-lg font-bold">{e.title}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {e.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesContent;
