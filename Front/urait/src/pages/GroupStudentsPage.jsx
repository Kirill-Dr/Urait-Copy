import React, { useEffect } from "react";
import { GroupStudents } from "../components/GroupStudents/GroupStudents";
import { InfoStudents } from "../components/InfoStudents/InfoStudents";
import { QuestionsStudents } from "../components/QuestionsStudents/QuestionsStudents";
import { CreateGroups } from "../components/CreateGroups/CreateGroups";

export const GroupStudentsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <GroupStudents />
      <InfoStudents />
      <CreateGroups />
      <QuestionsStudents />
    </div>
  );
};
