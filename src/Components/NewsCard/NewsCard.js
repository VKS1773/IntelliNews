import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  // const { description, publishedAt, source, title, url, urlToImage } = article;
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottom: "10px solid white",
      }}
      i={i}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          image={urlToImage}
          sx={{ height: "200px" }}
          component="img"
        ></CardMedia>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography
          gutterBottom
          variant="h6"
          style={{
            padding: "0 16px",
          }}
        >
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          padding: "0 16px 8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
