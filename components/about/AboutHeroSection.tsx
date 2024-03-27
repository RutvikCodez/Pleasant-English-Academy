import React from "react";
import TitleDesc from "../TitleDesc";

const AboutHeroSection = () => {
  return (
    <div className="py-8 lg:py-12">
      <div className="container px-4 md:px-6">
        <TitleDesc
          desc="The Pleasant English Academy has been a cornerstone of language education for over four decades. We have been
                committed to providing high-quality language instruction, helping our students achieve fluency and
                confidence in English. Our experienced faculty, modern curriculum, and state-of-the-art facilities
                ensure that our students receive the best possible learning experience."
          title="About Pleasant English Academy"
          wrapperClass="max-w-[900px]"
        />
      </div>
    </div>
  );
};

export default AboutHeroSection;
