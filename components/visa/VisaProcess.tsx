import React from "react";
import VisaTypes from "./VisaTypes";
import Title from "./Title";
import { visaProcessData } from "@/utils/getData";

const VisaProcess = () => {
  return (
    <section className="flex flex-col gap-12 lg:gap-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:gap-12">
          <Title
            desc="The visa application process can vary depending on the type of visa you are applying for and your home
            country. However, the general process involves the following steps."
            title="Visa Application Process"
            name="Application Process"
          />
          <div className="grid gap-6">
            <ol className="list-decimal list-inside grid gap-4">
              {visaProcessData.map((e, i) => {
                return (
                  <VisaTypes
                    desc={e.desc}
                    name={e.title}
                    number={i + 1}
                    key={i}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaProcess;
