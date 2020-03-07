import React from "react";
import {Link} from "react-router-dom";
import {Grid, Hidden, Typography} from "@material-ui/core";
import {Score as ScoreType} from "../../../types";
import {useStyles} from "../../../theme";
import Profile from "./profile";

export function Score(props: ScoreType & {rank: number}) {
  const classes = useStyles();
  return (
    <Link to={`/users/${props.user.username}`} style={{color: 'black', textDecoration: 'none'}}>
      <Grid container className={classes.container}>
        <Grid item container justify='center' alignContent='center' xs={4}>
          <Typography variant='h5'>{props.rank}</Typography>
        </Grid>
        <Grid item container justify='center' alignItems='center' xs={8} lg={4}>
          <Grid item xs={12}>
            <Profile {...props.user}/>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item container justify='center' xs={4}>
            {props.main && props.main}
          </Grid>
        </Hidden>
      </Grid>
    </Link>
  );
}

export default Score;