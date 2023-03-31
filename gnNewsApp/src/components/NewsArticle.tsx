import React, { useState, ReactElement } from "react";
import Popup from "./Popup";
import { NewArticleType } from "../context/ArticlesContext";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const NewsArticle = ({
  author,
  content,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
}: NewArticleType): ReactElement => {
  const [isPopup, setIsPopup] = useState(false);
  const { grid } = useSelector((state: RootState) => state.grid);
  console.log("grid from articleee", grid);
  return (
    <>
      {grid ? (
        <article
          className="single-article"
          onClick={() => setIsPopup(!isPopup)}
        >
          {urlToImage && <img src={urlToImage} alt={title} className="img" />}
          <span className="article-source">{source.name}</span>
          <span className="date-article">{publishedAt.slice(0, 10)}</span>
          <div className="article-info">
            <h5>{title}</h5>
            <span>
              {(description && description?.substring(0, 75) + " ...") ||
                "Click to read more..."}
            </span>
          </div>
          {isPopup && <Popup author={author} url={url} content={content} />}
        </article>
      ) : (
        <article
          className="single-article-list"
          onClick={() => setIsPopup(!isPopup)}
        >
          <span className="article-source-list">{source.name}</span>
          <span className="date-article">{publishedAt.slice(0, 10)}</span>
          <div className="article-info">
            <h5>{title}</h5>
          </div>
          {isPopup && <Popup author={author} url={url} content={content} />}
        </article>
      )}
    </>
  );
};

export default NewsArticle;
