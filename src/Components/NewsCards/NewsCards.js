import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Typography, Grid, Grow } from "@mui/material";
const NewsCards = ({ articles, i }) => {
  return (
    <Grow in>
      <Grid alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
