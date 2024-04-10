import { aboutData, milestonesData } from "@/utils/getData";
import React from "react";

const HistoryAndMilestone = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        {aboutData.map((e, i) => {
          return (
            <div key={i} className="flex flex-col justify-center gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl">
                  {e.title}
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {e.desc}
                </p>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl">
              Our Milestones
            </h2>
            <ul className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {milestonesData.map((item, index) => (
                <li key={index}>{`- ${item.year}: ${item.milestone}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryAndMilestone;
