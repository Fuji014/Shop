import React from "react";

// helmet
import { Helmet } from "react-helmet";

function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" conent={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: "Welcome To Proshop",
  description: "We sell the best products for cheap",
  keywords: "electronics, but electronics, cheap electronics",
};

export default Meta;
