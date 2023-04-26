import React from "react";
//components
import Sidebar from "../components/Sidebar";
//styled
import { Container, NewsContent, NewsS } from "./News.elements";

function News() {
  return (
    <NewsS>
      <Container>
        <Sidebar />
        <NewsContent></NewsContent>
      </Container>
    </NewsS>
  );
}

export default News;
