import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "../../theme";

export function Header(): React.ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.container_lg}>
      <Grid item container direction='row' justify='center' xs={4}>
        <Typography variant='h5' align='center'>Challenger</Typography>
      </Grid>
      <Grid item container justify='center' xs={4}>
        <Typography variant='h5' align='center'>Outcome</Typography>
      </Grid>
      <Grid item container direction='row-reverse' justify='center' xs={4}>
        <Typography variant='h5' align='center'>Challenged</Typography>
      </Grid>
    </Grid>
  );
}