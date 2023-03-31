import { ReactElement } from "react";

type PropTypes = {
  author?: string;
  url?: string;
  content?: string;
};
const Popup = ({ author, url, content }: PropTypes): ReactElement => {
  return (
    <div className="opinion-popup">
      {author ? <h4>Author: {author}</h4> : <h4>Author: No Details</h4>}
      {content ? <p>{content}</p> : <p>No content. Go to the article</p>}
      <a href={url} target="_blank" className="link">
        Click to open the article
      </a>
    </div>
  );
};

export default Popup;
