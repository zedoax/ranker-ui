import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "../../theme";

export function Header(): React.ReactElement {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item container justify='center' xs={6}>
          <Typography variant='h4' align='left'>User</Typography>
        </Grid>
        <Grid item container justify='center' xs={6}>
          <Typography variant='h4' align='center'>Seasons</Typography>
        </Grid>
      </Grid>
    </div>
  );
}