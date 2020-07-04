import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useId } from "react-id-generator";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "50%",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "100%",
    },
    "& .MuiButton-root": {
      margin: theme.spacing(2),
      width: "100%",
    },
  },
}));

export default function CreateNote(props) {
  const [values, setInputValues] = useState({
    title: "",
    note: "",
    date: null,
    hour: null,
    err: true,
  });

  

  let today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  let d = new Date();

  const handleSubmit = () => {
    if (values.note.trim().length === 0 || values.title.trim().length === 0) {
      setInputValues({ ...values, err: true });
    } else {
      setInputValues({
        ...values,
        date: today,
        hour: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        err: false,
      });
      
    }
  };

  useEffect(() => {
    if (!values.err) {
      props.handleNote(values);
      
      let existingTasks = JSON.parse(localStorage.getItem("tasks"))
      if(existingTasks == null){
        existingTasks = [];
        localStorage.setItem("tasks", JSON.stringify([values]));
      }else{
        localStorage.setItem("tasks", JSON.stringify([...existingTasks, values]));
      }
    } 
  }, [values.hour]);

  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          title="title"
          onChange={(e) => {
            setInputValues({ ...values, title: e.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          title="Note"
          multiline
          id="note"
          label="Note"
          variant="outlined"
          onChange={(e) => setInputValues({ ...values, note: e.target.value })}
        />
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
}
