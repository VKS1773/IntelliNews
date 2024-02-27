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
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={urlToImage}>
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="h2"
            ></Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="h2"
            ></Typography>
          </div>
          <Typography gutterBottom variant="h5"></Typography>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardMedia>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {article.description}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
