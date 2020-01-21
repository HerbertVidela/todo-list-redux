import React from "react";
import "./MainPage.css";
import { TodoList, AddTodo } from "./components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    boxShadow: "0px 16px 20px -5px black",
    maxWidth: "500px",
    margin: "20px auto 0 auto",
    backgroundColor: "beige"
  }
}));

function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default MainPage;
