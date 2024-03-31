import React from "react";
import Title from "./Title";

const VisaSection = () => {
  return (
    <section className="container grid gap-4 px-4 md:px-6">
      <div className="flex flex-col gap-1">
        <div className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
          Are you an international student?
        </div>
        <Title
          desc=" Welcome to the English Academy Visa Consultant. We are here to help
            you understand the visa application process and guide you through
            the requirements. Please select your visa type below to get started."
          title="Visa Consultant"
        />
      </div>
    </section>
  );
};

export default VisaSection;
