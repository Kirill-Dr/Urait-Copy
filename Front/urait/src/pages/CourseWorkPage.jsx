import React, { useEffect } from "react";
import { WorkCourse } from "../components/WorkCourse/WorkCourse";
import { QuestionsCourse } from "../components/QuestionsCourse/QuestionsCourse";
import { CardsCourse } from "../components/CardsCourse/CardsCourse";

export const CourseWorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <WorkCourse />
      <CardsCourse />
      <QuestionsCourse />
    </div>
  );
};
