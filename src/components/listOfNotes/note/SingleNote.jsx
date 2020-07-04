import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontSize: 20,
  },
  bottom:{
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SingleNote(props) {
  const classes = useStyles();
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography className={classes.title}>
            {props.noteData.title}
          </Typography>
          <Typography className={classes.pos}>{props.noteData.note}</Typography>
          <Typography className={classes.bottom}>{props.noteData.date}</Typography>
          <Typography className={classes.bottom}>{props.noteData.hour}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
