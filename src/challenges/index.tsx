import React, {useEffect, useState} from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import {Games} from "../games/components/games";
import Challenge from "./challenge/components/challenge";
import {getUserToken} from "../redux/store";
import Accept from "./challenge/components/accept";
import Cancel from "./challenge/components/cancel";
import {Season, User} from "../types";
import {useStyles} from "../theme";
import {get} from "../utils/fetch";

export function Challenges() {
  // Hooks and instance variables
  const classes = useStyles();
  const user = getUserToken();

  // Shared form population state
  const [challengers, setChallengers] = useState<User[] | undefined>(undefined);
  const [seasons, setSeasons] = useState<Season[] | undefined>(undefined);

  // Shared state population hook
  useEffect(() => {
    get(
      `${process.env.REACT_APP_RANKER_URI}/users`,
      (data: Response) => data.json(),
      (users: User[]) => setChallengers(users.filter((challenger: User) => challenger.username !== user.username))
    );
    get(`${process.env.REACT_APP_RANKER_URI}/seasons/active`,
      (data: Response) => data.json(),
      (seasons: Season[]) => setSeasons(seasons)
    );
  }, [user.username]);

  if (!challengers || !seasons) {
    return <div/>;
  }

  return (
    <Grid container direction='column' spacing={6}>
      <Grid item>
        <Paper className={classes.container}>
          <Typography align='center' variant='h5' className={classes.container_sm}>
            Issue a Challenge
          </Typography>
          <Challenge challenger={user.username} challengers={challengers} seasons={seasons}/>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.container}>
          <Typography align='center' variant='h5' className={classes.container_sm}>
            Accept a Challenge
          </Typography>
          <Accept challenged={user.username} challengers={challengers}/>
        </Paper>

      </Grid>
      <Grid item>
        <Paper className={classes.container}>
          <Typography align='center' variant='h5' className={classes.container_sm}>
            Cancel a Challenge
          </Typography>
          <Cancel challenged={user.username} challengers={challengers}/>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Games;