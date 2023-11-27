import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../component/Header";

const Layout = ({ children, title }) => {
  console.log("in the layout: ", title);
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
