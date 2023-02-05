import React from "react";
import Newsitem from "./Newsitem";

export default function News({ articles }) {
  return (
    <>
      <h2>Top headlines</h2>
      <div className="container">
        <div className="row">
          <h2 className="mt-3">Top Headlines:</h2>
          <Newsitem articles={articles} />
        </div>
      </div>
    </>
  );
}
