import {Game as GameType} from "../../../types";
import React from "react";
import {useStyles} from "../../../theme";
import {Divider, Paper} from "@material-ui/core";
import {Header} from "./header";
import Seasons from "./seasons";

export function Game(props: GameType): React.ReactElement {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.container}>
        <Header {...props}/>
      </Paper>
      <Divider className={classes.divider}/>
      <Paper>
        <Seasons seasons={props.seasons}/>
      </Paper>
    </div>
  );
}