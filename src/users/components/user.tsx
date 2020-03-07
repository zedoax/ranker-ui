import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";
import {User as UserType} from "../../types";
import {useStyles} from "../../theme";
import Profile from "./profile";


export function User(props: UserType) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container_sm}>
      <Grid item container justify='center' xs={6}>
        <Profile {...props}/>
      </Grid>
      <Grid item container justify='center' alignItems='center' xs={6}>
        {props.scores.map((score, index) => (
          <Link to={`/seasons/${score.season.id}`} style={{color: 'black', textDecoration: 'none',}} key={score.id}>
            <Typography component='pre'>
              {`${score.season.name}${index < props.scores.length - 1 ? ', ' : ''}`}
            </Typography>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
}

export default User;