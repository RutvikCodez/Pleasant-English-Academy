import CourceContent from "@/components/cources/CourceContent";
import { PteData, ieltsData, spokenData } from "@/utils/getData";
import React from "react";

const page = ({ params }: { params: { cource: string } }) => {
  switch (params.cource) {
    case "SpokenEnglishCourse":
      return <CourceContent content={spokenData} />;
    case "IELTSPreparationCourse":
      return <CourceContent content={ieltsData} />;
    case "PTEAcademicCourse":
      return <CourceContent content={PteData} />;
    default:
      return null;
  }
};

export default page;
