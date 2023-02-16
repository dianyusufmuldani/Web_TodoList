import React from "react";

const TextTitle = ({ value }) => {
  return (
    <div className="title" data-cy="title">
      <h1>{value}</h1>
    </div>
  );
};

export default TextTitle;
