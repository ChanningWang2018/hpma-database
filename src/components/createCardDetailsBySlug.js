import React from "react";
import CardDetails from "./CardDetails";

const createCardDetailsBySlug = (slug) => {
  return (props) => {
    return <CardDetails {...props} slug={slug} />;
  };
};

export default createCardDetailsBySlug;
