import React from "react";
import {Grid, Hidden, Typography} from "@material-ui/core";
import {useStyles} from "../../theme";

export function Header(): React.ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item container justify='center' xs={4}>
        <Typography variant='h5' align='center'>Rank</Typography>
      </Grid>
      <Grid item container justify='center' xs={8} lg={4}>
        <Typography variant='h5' align='center'>Player</Typography>
      </Grid>
      <Hidden mdDown>
        <Grid item container justify='center' xs={4}>
          <Typography variant='h5' align='center'>Characters</Typography>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Header;