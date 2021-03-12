import React from "react";

const PageWrapper = (props) => {
  return <div className="wrapper wrapper-content">{props.children}</div>;
};

export default PageWrapper;
