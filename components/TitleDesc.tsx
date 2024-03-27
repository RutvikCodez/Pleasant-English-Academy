import React from "react";
import { twMerge } from "tailwind-merge";

type TitleDesc = {
    title: string
    desc: string
    wrapperClass?: string
}

const TitleDesc = ({desc,title,wrapperClass,...props}:TitleDesc) => {
  return (
    <div className="flex flex-col gap-3 text-center" {...props}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
        {title}
      </h2>
      <h3 className={twMerge("mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",wrapperClass)}>
        {desc}
      </h3>
    </div>
  );
};

export default TitleDesc;
