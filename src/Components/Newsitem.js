import React from "react";

export default function Newsitem({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <div
          className="card col-sm-4 m-3 p-3 center"
          style={{ width: "21.7rem" }}
          key={article.title}
        >
          <img
            src={
              !article.urlToImage
                ? "https://images.moneycontrol.com/static-mcnews/2017/08/information-technology-internet-technology-cyber-space-770x433-770x433.jpg"
                : article.urlToImage
            }
            className="card-img-top mt-3 rounded"
            alt=""
            style={{ height: "35vh" }}
          />
          <div className="card-body">
            <p className="card-text">{article.source.name}</p>
            <h5 className="card-title">
              <a
                href={article.url}
                className="card-link text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                {article.title}
              </a>
            </h5>
            <p className="card-text">
              {!article.description ? article.title : article.description}
            </p>
            <p className="card-text">
              by {!article.author ? "Unknown" : article.author}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
