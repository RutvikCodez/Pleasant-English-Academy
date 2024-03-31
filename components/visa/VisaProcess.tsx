import React from "react";
import VisaTypes from "./VisaTypes";
import Title from "./Title";

const VisaProcess = () => {
  const data = [
    {
      title: "Complete the online visa application form.",
      desc: "You will need to fill out the DS-160 form on the U.S. Department of State website. Make sure toanswer all questions accurately and honestly.",
    },
    {
      title: "Pay the visa application fee.",
      desc: "After completing the form, you will need to pay the visa application fee. The fee amount may vary depending on the type of visa you are applying for.",
    },
    {
      title: "Schedule a visa interview.",
      desc: "Once you have paid the visa application fee, you can schedule an interview at the nearest U.S. embassy or consulate in your country.",
    },
    {
      title: "Prepare the required documents.",
      desc: "You will need to gather the necessary documents to bring to your visa interview, including your passport, visa application confirmation page, photo, and Form DS-160 barcode.",
    },
    {
      title: "Attend the visa interview.",
      desc: " On the day of your interview, make sure to arrive at the embassy or consulate on time and bring all the required documents. Be prepared to answer questions about your background, purpose of travel, and ties to your home country.",
    },
  ];
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
              {data.map((e, i) => {
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
