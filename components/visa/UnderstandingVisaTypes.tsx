import React from "react";
import VisaTypes from "./VisaTypes";
import Title from "./Title";

const UnderstandingVisaTypes = () => {
  const Data = [
    {
      title: "Student Visa",
      desc: "Explore a range of services offered by Pleasant English Academy to meet your educational and immigration needs.",
    },
    {
      title: "Immigration",
      desc: "Navigate the immigration process smoothly with our expert guidance. We help you with documentation and legal procedures for a hassle-free experience.",
    },
    {
      title: "Investor Visa",
      desc: " Explore investment opportunities and secure an investor visa. We provide insights into potential investments and assist with the visa application process.",
    },
    {
      title: "Visitor Visa",
      desc: " Plan your visit with ease. We assist in obtaining a visitor visa, providing guidance on the application process and required documentation.",
    },
    {
      title: "Dependent & Parents Visa",
      desc: "Bring your family together. We offer assistance in securing dependent and parents visas, ensuring a smooth process for family reunification.",
    },
    {
      title: "IELTS Coaching",
      desc: "Excel in the IELTS exam with our professional coaching. Our comprehensive coaching program prepares you for success in all sections of the exam.",
    },
  ];
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
              {Data.map((e, i) => {
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
