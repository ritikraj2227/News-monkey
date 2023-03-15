import React from "react";

export default function Addmore({ next, prev, page }) {
  return (
    <div className="container d-flex justify-content-between mb-5 mt-3">
      <button
        disabled={page <= 1}
        type="button"
        className="btn btn-primary"
        onClick={prev}
      >
        &larr; Previous
      </button>
      <button type="button" className="btn btn-primary" onClick={next}>
        Next &rarr;
      </button>
    </div>
  );
}
