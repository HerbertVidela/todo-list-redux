import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const Nav = ({ todos }) => (
  <AppBar position="static">
    <Toolbar>
      <div style={{ flexGrow: "1" }}>
        <Typography variant="h6" noWrap>
          Redux duck example
        </Typography>
      </div>
      <div>
        <IconButton aria-label="show new notifications" color="inherit">
          <Badge
            badgeContent={todos.filter(todo => !todo.completed).length}
            color="secondary"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
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

Nav.propTypes = propTypes;

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(Nav);
