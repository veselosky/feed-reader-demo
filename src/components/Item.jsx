import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
