import React from 'react';
import {Grid} from "@material-ui/core";
import {Match as _Match, User} from "../../../types";
import Challenger from "./challenger";
import {Score} from "./score";
import {useStyles} from "../../../theme";
import Challenged from "./challenged";

type MatchProps = _Match;

export function Match(props: MatchProps): React.ReactElement {
  const challenger: User = props.challenger_is_winner ? props.winner.user : props.loser.user;
  const challenged: User = props.challenger_is_winner ? props.loser.user : props.winner.user;
  const classes = useStyles();
  return (
    <Grid container alignItems='center' className={classes.container_lg}>
      <Grid item container xs={4}>
        <Challenger {...challenger}/>
      </Grid>
      <Grid item container justify='center' alignItems='center' xs={4}>
        <Grid item>
          <Score {...{
            winner_wins: props.winner_wins,
            loser_wins: props.loser_wins,
            challenger_winner: props.challenger_is_winner
          }}/>
        </Grid>
      </Grid>
      <Grid item container xs={4}>
        <Challenged {...challenged}/>
      </Grid>
    </Grid>
  )
}