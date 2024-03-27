import { BookIcon, ClockIcon, SchoolIcon } from "lucide-react";
import React from "react";

const WhyChooseUS = () => {
  const data = [
    {
      icon: <SchoolIcon className="h-10 w-10" />,
      title: "Experienced Teachers",
      description:
        "Our instructors are dedicated to helping you master the language.",
    },
    {
      icon: <BookIcon className="h-10 w-10" />,
      title: "Interactive Materials",
      description:
        "Engage with our multimedia resources for a dynamic learning experience.",
    },
    {
      icon: <ClockIcon className="h-10 w-10" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with our customizable timetable.",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
            Why choose our academy?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a comprehensive learning experience with our experienced
            teachers and interactive materials.
          </p>
        </div>
        <div className="mx-auto max-w-3xl grid gap-10 lg:grid-cols-3">
          {data.map((e, i) => (
            <div
              key={i}
              className="p-4 flex flex-col items-center gap-2 py-4 border border-gray-800 rounded-xl bg-black shadow-sm sm:grid-row"
            >
              {e.icon}
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-semibold">{e.title}</h3>
                <h4 className="text-xs text-gray-500">
                  {e.description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;
