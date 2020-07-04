import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import SingleNote from "./note/SingleNote";

import { useId } from "react-id-generator";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingTop: "20px",
  },
  gridList: {
    width: 500,
  },
}));

export default function ListOfNotes(props) {
  const [htmlId] = useId();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={"auto"} className={classes.gridList} cols={1}>
        {props.notes.map((note) => (
          <GridListTile key={htmlId}>
            <SingleNote noteData={note} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
