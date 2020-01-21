import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <div>
    {todos.map((todo, index) => (
      <Todo key={`todo-${index}`} {...todo} />
    ))}
  </div>
);

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool
    })
  )
};

TodoList.propTypes = propTypes;

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodoList);
