import React from "react";
import Layout from "../layout/Layout";

const Resume = () => {
  const documentURL =
    "https://drive.google.com/file/d/1pC0GcwOPFNkBtUkjERwnD3nqX8O3_nQN/view?usp=sharing";
  return (
    <Layout title={"Resume"}>
      <div>
        <iframe src={documentURL} width="100%" height="600px" />
      </div>
    </Layout>
  );
};

export default Resume;
