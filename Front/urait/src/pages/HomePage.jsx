import React, { useEffect } from "react";
import { Events } from "../components/Events/Events";
import { RegStart } from "../components/RegStart/RegStart";
import { SearchBlock } from "../components/SearchBlock/SearchBlock";
import { Webinars } from "../components/Webinars/Webinars";
import { LastNews } from "../components/LastNews/LastNews";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Events />
      <SearchBlock />
      <Webinars />
      <LastNews />
      <RegStart />
    </main>
  );
};
