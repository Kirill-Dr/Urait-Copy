import React, { useEffect } from "react";
import { HelpCards } from "../components/HelpCards/HelpCards";
import { AlphabetCursor } from "../components/AlphabetCursor/AlphabetCursor";

export const HelpPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HelpCards />
      <AlphabetCursor />
    </div>
  );
};
