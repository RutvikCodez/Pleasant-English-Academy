import React from "react";

const HistoryAndMilestone = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl">
              Our History
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The English Academy was founded in 1982 with the vision of
              creating a learning environment where students could immerse
              themselves in the English language and culture. Over the years, we
              have grown and expanded, opening new campuses and developing
              innovative programs to meet the evolving needs of our students.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl">
              Our Milestones
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              - 1985: Launched the Intensive English Program to provide
              comprehensive language instruction.
              <br />- 1992: Established the English Academy Foundation to offer
              scholarships to deserving students.
              <br />- 2005: Introduced the English for Business course to help
              professionals enhance their communication skills.
              <br />- 2010: Implemented a digital learning platform to support
              blended learning.
              <br />- 2019: Partnered with international schools to offer
              exchange programs for students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryAndMilestone;
