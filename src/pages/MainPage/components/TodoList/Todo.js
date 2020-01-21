import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { toggleTodo } from "./todoSlice";

const useStyles = makeStyles({
  todo: {
    maxWidth: "500px",
    padding: "20px 50px",
    margin: "0 auto",
    fontSize: "1rem",
    background: "beige",
    cursor: "pointer",
    borderBottom: "1px solid black",
    textDecoration: props => (props.completed ? "line-through" : "none"),
    userSelect: "none"
  }
});

const mapDispatchToProps = { toggleTodo };

const Todo = ({ text, id, completed, toggleTodo }) => {
  const classes = useStyles({ completed });

  return (
    <div
      className={classes.todo}
      onClick={() => {
        toggleTodo({ id });
      }}
    >
      {text}
    </div>
  );
};

const propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool
};

Todo.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(Todo);
