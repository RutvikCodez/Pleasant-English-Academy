import React from "react";

type TitleProps = {
  name?: string;
  title: string;
  desc: string;
};

const Title = ({ desc, name, title, ...props }: TitleProps) => {
  return (
    <div className="grid gap-4" {...props}>
      {name && <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm dark:bg-gray-800">
        {name}
      </div>}
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-[900px] text-gray-500 xl:text-xl/relaxed dark:text-gray-400">
        {desc}
      </p>
    </div>
  );
};

export default Title;
