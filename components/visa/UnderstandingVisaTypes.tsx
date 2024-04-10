import React from "react";
import VisaTypes from "./VisaTypes";
import Title from "./Title";
import { visaData } from "@/utils/getData";

const UnderstandingVisaTypes = () => {
  return (
    <section className="grid gap-12 lg:gap-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:gap-12 xl:gap-20">
          <Title
            desc="There are different types of visas available for international students. Understanding the purpose of
              each visa is important for a successful application. Below are the common types of student visas and
              their descriptions."
            title="Understanding Visa Types"
            name="Visa Types"
          />
          <div className="grid gap-8">
            <ul className="grid gap-4">
              {visaData.map((e, i) => {
                return (
                  <VisaTypes
                    desc={e.desc}
                    name={e.title}
                    number={i + 1}
                    key={i}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingVisaTypes;
