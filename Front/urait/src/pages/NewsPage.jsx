import React, { useEffect } from "react";
import { NewsHeader } from "../components/NewsHeader/NewsHeader";
import { NewsMainContent } from "../components/NewsMainContent/NewsMainContent";
import { NewsContacts } from "../components/NewsContacts/NewsContacts";

export const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NewsHeader />
      <NewsMainContent />
      <NewsContacts />
    </div>
  );
};
