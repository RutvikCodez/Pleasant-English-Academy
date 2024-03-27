import React from "react";
import TitleDesc from "../TitleDesc";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      imagepath: "/static/Rutvik.jpg",
      name: "Rutvik Darji",
      desc: "I've been learning English with the academy for 6 months, and myconfidence has improved significantly. The teachers aresupportive and the classes are engaging. I highly recommend thisacademy to anyone who wants to learn English.",
    },
    {
      imagepath: "/static/Rutvik.jpg",
      name: "Mark Lee",
      desc: "The academy's personalized learning plans have helped me progress quickly. The classes are interactive and the teachers are encouraging. I feel more confident speaking English after joining this academy.",
    },
  ];
  return (
    <section className="w-full">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <TitleDesc
          desc="Our students love learning with us. Read what they have to say about
            their experience."
          title="Testimonials"
        />
        <div className="mx-auto grid max-w-3xl items-start gap-6 sm:max-w-4xl lg:grid-cols-2 lg:gap-12">
          {data.map((e, i) => (
            <div key={i} className="flex flex-col items-center gap-y-2">
              <div className="relative w-40 h-w-40 aspect-square object-cover">
                <Image
                  alt={e.name}
                  className="rounded-full"
                  src={e.imagepath}
                  fill
                />
              </div>
              <div className="flex flex-col gap-y-1 text-center">
                <h4 className="text-lg font-bold">{e.name}</h4>
                <h5 className="text-sm text-gray-500 dark:text-gray-400">
                  {e.desc}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
