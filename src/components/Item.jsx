import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({ item }) => {
  var media =
    item.image.url === undefined ? (
      ""
    ) : (
      <CardMedia
        component="img"
        style={{
          display: "block",
          maxWidth: "100%",
          maxHeight: "140px",
          width: "auto",
          height: "auto"
        }}
        image={item.image.url}
      />
    );

  // For demonstration purposes only. Do not try this at home. Since
  // summaries often include HTML, we dangerouslySetInnerHTML.
  // FIXME: The string should go through some kind of sanitizer!
  var description = { __html: item.summary };

  return (
    <Card onClick={() => window.open(item.link, "_blank")}>
      {media}
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {item.title}
        </Typography>
        <Typography component="div">
          <div dangerouslySetInnerHTML={description} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(item.link, "_blank")}
        >
          Read it
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
