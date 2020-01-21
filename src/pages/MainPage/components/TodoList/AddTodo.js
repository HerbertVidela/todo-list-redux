import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./todoSlice";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inputContainer: {
    backgroundColor: "beige",
    maxWidth: "400px",
    padding: "0 50px",
    margin: "0 auto",
    borderBottom: "1px solid black"
  },
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }
}));

const mapDispatchToProps = { addTodo };

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const classes = useStyles();
  const onSubmit = e => {
    e.preventDefault();

    if (!todo.trim()) {
      return;
    }

    addTodo(todo);
    setTodo("");
  };
  const onChange = e => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.inputContainer}>
        <TextField
          label="Todo"
          value={todo}
          onChange={onChange}
          InputProps={{ classes: { underline: classes.underline } }}
          fullWidth
        />
      </div>
      <button type="submit" style={{ display: "none" }}>
        Add Todo
      </button>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(AddTodo);
