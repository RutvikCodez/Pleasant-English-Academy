import React from "react";
import TitleDesc from "../TitleDesc";
import clsx from "clsx";

type Props = {
  content: {
    title: string;
    desc: string;
    information: {
      name: string;
      desc: string;
    }[];
  };
};

const CourceContent = ({ content, ...props }: Props) => {
  return (
    <section className="fle flex-col gap-10 py-10" {...props}>
      <TitleDesc title={content.title} desc={content.desc} />
      <div className="py-10">
      {
        content.information.map((e,i) => {
          return <div key={i} className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 sm:flex-row flex-col">
          <div className={clsx("sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0",{
            "sm:order-2": i % 2 === 0,
            "sm:order-1": i % 2 !== 0
          })}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className={clsx("flex-grow sm:text-left text-center mt-6 sm:mt-0", {
            "sm:order-1": i % 2 === 0,
            "sm:order-2": i % 2 !== 0
          })}>
            <h2 className=" text-lg title-font font-medium mb-2">
              {e.name}
            </h2>
            <p className="leading-relaxed text-base">
              {e.desc}
            </p>
          </div>
        </div>
        })
      }
      </div>
    </section>
  );
};

export default CourceContent;
