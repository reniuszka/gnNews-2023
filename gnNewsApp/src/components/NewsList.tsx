import React, { ReactElement } from "react";
import NewsArticle from "./NewsArticle";
import { useParams } from "react-router-dom";
import { NewsType } from "../context/ArticlesContext";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type PropType = {
  data: NewsType;
};

const NewsList = ({
  data: { articles, status, totalResults },
}: PropType): ReactElement => {
  const { country } = useParams();
  const { grid } = useSelector((state: RootState) => state.grid);
  return (
    <section>
      <div className="title">
        {country ? <h2>Our {country} News!</h2> : <h2>Our News!</h2>}
        <div className="title-underline"></div>
      </div>
      <div className={grid ? "articles-grid" : "articles-list"}>
        {articles?.map((article) => {
          return (
            <NewsArticle
              key={`${article.publishedAt}-${article.author} `}
              {...article}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NewsList;
