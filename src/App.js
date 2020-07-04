import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListOfNotes from "./components/listOfNotes/ListOfNotes";
import ReadNote from "./components/readNote/ReadNote";
import EditNote from "./components/editNote/EditNote";
import CreateNote from "./components/createNote/CreateNote";
import NavBar from "./components/navBar/NavBar";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    let allLocalStorageItems = JSON.parse(localStorage.getItem("tasks"));
    if (allLocalStorageItems) {
      setAllNotes(allLocalStorageItems)
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <ListOfNotes {...props} notes={allNotes} />}
        />
        <Route
          path="/create"
          exact
          render={(props) => (
            <CreateNote
              {...props}
              handleNote={(note) => {
                setAllNotes([...allNotes, note]);
                //console.log(allNotes)
              }}
            />
          )}
        />
        <Route path="/edit" exact component={EditNote} />
        <Route path="/read" exact component={ReadNote} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
