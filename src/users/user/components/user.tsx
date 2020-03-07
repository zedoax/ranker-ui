import React from "react";
import {Divider, Paper} from "@material-ui/core";
import {useStyles} from "../../../theme";
import {User as _User} from "../../../types";
import {Profile} from "./profile";
import {Scores} from "./scores";

export function User(props: _User): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper>
        <Profile {...props}/>
      </Paper>
      <Divider component='div' className={classes.divider}/>
      <Paper>
        <Scores scores={props.scores}/>
      </Paper>
    </div>
  );
}

export default User;