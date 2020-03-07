import React, {useEffect, useState} from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import Witness from "../challenges/challenge/components/witness";
import {NewWitness} from "./components/new-witness";
import {Games} from "../games/components/games";
import {useStyles} from "../theme";
import {get} from "../utils/fetch";
import {User} from "../types";

export function WitnessMatch() {
  // Hooks and instance variables
  const classes = useStyles();

  // Witness form state
  const [challengers, setChallengers] = useState<User[] | undefined>(undefined);
  const [min_rounds] = useState<number | undefined>(3);
  const [max_rounds] = useState<number | undefined>(5);

  // Form challengers population hook
  useEffect(() => {
    get(
      `${process.env.REACT_APP_RANKER_URI}/users`,
      (data: Response) => data.json(),
      (users: User[]) => setChallengers(users)
    );
  }, []);

  if (!challengers || !min_rounds || !max_rounds) {
    return <div/>;
  }

  // Create winner and loser round options arrays
  const winner_rounds = Array.from({length: max_rounds / 2}, (x,i) => i + Math.floor(min_rounds / 2 + 1));
  const loser_rounds = Array.from({length: max_rounds / 2 + 1}, (x,i) => i);

  return (
    <Grid container direction='column' spacing={6}>
      <Grid item>
        <Paper className={classes.container}>
          <Typography align='center' variant='h5' className={classes.container_sm}>Witness a Match</Typography>
          <Witness challengers={challengers} winner_rounds={winner_rounds} loser_rounds={loser_rounds}/>
        </Paper>
      </Grid>
    </Grid>
  );
}

export {NewWitness};
export default Games;