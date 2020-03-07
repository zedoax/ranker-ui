import {Season as _Season} from "../../../types";
import React from "react";
import {useStyles} from "../../../theme";
import {Avatar, Grid, Hidden, Paper, Typography} from "@material-ui/core";

export function Header(props: _Season): React.ReactElement {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Grid container justify='center'>
        <Hidden smDown>
          <Grid item container justify='center' xs={6} md={2}>
            <Avatar className={classes.large_avatar} src={props.game.img} style={{alignSelf: 'center'}}/>
          </Grid>
        </Hidden>
        <Grid item container direction='column' justify='center' xs={6} md={4} className={classes.container}>
          <Typography variant='h3' align='center'><b>Season:</b> {props.name}</Typography>
          <Typography variant='h5' align='center'><b>Game:</b> {props.game.title}</Typography>
          <Typography variant='subtitle2' align='center'><b>Start:</b> {props.start}</Typography>
          <Typography variant='subtitle2' align='center'><b>End:</b> {props.end}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}