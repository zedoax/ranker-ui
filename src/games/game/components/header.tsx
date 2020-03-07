import {Game as GameType} from "../../../types";
import React from "react";
import {useStyles} from "../../../theme";
import {Avatar, Grid, Hidden, Typography} from "@material-ui/core";

export function Header(props: GameType): React.ReactElement {
  const classes = useStyles();
  return (
    <Grid container justify='center'>
      <Hidden smDown>
        <Grid item container justify='center' xs={6} md={2}>
          <Avatar className={classes.large_avatar} src={props.img} style={{alignSelf: 'center'}}/>
        </Grid>
      </Hidden>
      <Grid item container direction='column' justify='center' xs={6} md={4} className={classes.container}>
        <Typography variant='h4' align='center'>
          <b>Title:</b> {props.title}
        </Typography>
        <Typography>
          <b>Description:</b> {props.description}
        </Typography>
      </Grid>
    </Grid>
  );
}