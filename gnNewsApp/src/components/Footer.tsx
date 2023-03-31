import React, { useState, useEffect, ReactElement } from "react";
import { NewsType } from "../context/ArticlesContext";

type PropType = {
  data: NewsType;
};
const Footer = ({
  data: { articles, status, totalResults },
}: PropType): ReactElement => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <footer>
      <p>
        Time: <span>{date.toLocaleTimeString()}</span>
      </p>
      <p>
        Number of articles: <span>{articles?.length | 0}</span>
      </p>
      <p>Build by Renata Diurczak</p>
    </footer>
  );
};

export default Footer;
