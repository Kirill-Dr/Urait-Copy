import React, { useEffect } from "react";
import { RPDComp } from "../components/RPDComp/RPDComp";
import { RPDQuestions } from "../components/RPDQuestions/RPDQuestions";
import { RPDHeader } from "../components/RPDHeader/RPDHeader";
import { RPDCards } from "../components/RPDCards/RPDCards";
import { WorkWithTemplate } from "../components/WorkWithTemplate/WorkWithTemplate";
import { ExamplesTemplates } from "../components/ExamplesTemplates/ExamplesTemplates";

export const TemplatePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <RPDHeader />
      <RPDCards />
      <ExamplesTemplates />
      <WorkWithTemplate />
      <RPDComp />
      <RPDQuestions />
    </div>
  );
};
