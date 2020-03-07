import {useStyles} from "../theme";
import React from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import {NewGame} from "../games/game";
import {NewSeason} from "../seasons/season";
import {NewWitness} from "../witness";
import {Game, User} from "../types";

type PanelProps = {
  games: Game[],
  users: User[]
}

export const Panel = ({games, users}: PanelProps) => {
  const classes = useStyles();
  return (
    <Grid container direction='column' spacing={6}>
      <Grid item>
        <Paper className={classes.container}>
          <Typography align='center' variant='h5' className={classes.container_sm}>
            Add New Game:
          </Typography>
          <NewGame/>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.container}>
          <Typography align='center' variant='h5' className={classes.container_sm}>
            Add New Season:
          </Typography>
          <NewSeason games={games}/>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.container}>
          <Typography align='center' variant='h5' className={classes.container_sm}>
            Add New Witness:
          </Typography>
          <NewWitness users={users}/>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Panel;