import React from "react";

type VisaTypesprops = {
    number: number;
    name: string;
    desc: string
}

const VisaTypes = ({desc,name,number,...props}:VisaTypesprops) => {
  return (
    <li className="grid gap-2" {...props}>
      <h3 className="font-semibold">{number}. {name}</h3>
      <p className="text-gray-500 dark:text-gray-400">
       {desc}
      </p>
    </li>
  );
};

export default VisaTypes;
