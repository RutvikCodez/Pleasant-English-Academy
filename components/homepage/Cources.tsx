import React from "react";
import TitleDesc from "../TitleDesc";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
import { AnchorIcon, ExternalLinkIcon } from "lucide-react";

const Courses = () => {
  const data = [
    {
      title: "Spoken English Course",
      desc: "Enhance your speaking skills with interactive sessions focusing on pronunciation, fluency, and everyday conversation.",
    },
    {
      title: "IELTS Preparation Course",
      desc: "Prepare effectively for the IELTS exam with comprehensive modules covering all sections - Listening, Reading, Writing, and Speaking.",
    },
    {
      title: "PTE Academic Course",
      desc: "Master the PTE Academic exam through intensive training sessions targeting speaking, writing, listening, and reading skills required for success.",
    },
  ];
  return (
    <section className="w-full">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <TitleDesc
          desc="Our courses are designed to help you achieve proficiency in English, whether you're aiming to improve your everyday communication skills, preparing for standardized tests like IELTS or PTE, or seeking academic excellence."
          title="Explore Our Courses"
        />
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {data.map((course, index) => (
            <Card key={index} className="grid gap-2 bg-gray-950 rounded-lg p-4">
              <CardHeader className="flex gap-3">
                <h3 className="text-xl font-semibold">{course.title}</h3>
              </CardHeader>
              <Divider />
              <CardBody>
                <h5 className="text-sm text-gray-500 dark:text-gray-400">
                  {course.desc}
                </h5>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link href={`/cources/${course.title}`}>
                  <div className="text-blue-500 flex gap-2">
                    <h6>Learn more</h6> 
                    <ExternalLinkIcon />
                  </div>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
