import React from "react";

const AchievementAndVision = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl">
              Our Achievements
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The English Academy has been recognized for excellence in language
              education, and our students have achieved success in various
              fields. Our achievements include:
              <br />- Winning the Best Language School award at the
              International Education Excellence Awards.
              <br />- Students scoring top marks in the Cambridge English
              examinations.
              <br />- Alumni going on to study at prestigious universities
              around the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl">
              Our Vision
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              As we look to the future, our vision is to continue to be a leader
              in language education, leveraging technology and innovative
              teaching methods to provide an immersive and effective learning
              experience. We are committed to helping our students become
              confident and proficient communicators who can thrive in the
              globalized world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementAndVision;
