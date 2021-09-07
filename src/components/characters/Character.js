import React from "react";

import { makeStyles } from "@material-ui/core";

import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
});
export default function Character({ character, handleOpen }) {
  const classes = useStyles();
  return (
    <>
      <Card
        spacing={2}
        className={classes.root}
        onClick={handleOpen(character)}
      >
        <CardMedia
          className={classes.media}
          image={character.image}
          titile={character.name}
        ></CardMedia>
        <h3>{character.name}</h3>
      </Card>
    </>
  );
}
