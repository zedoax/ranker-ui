import React from "react";
import {Grid, Typography} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useStyles} from "../../../theme";

export function Score(props: {winner_wins: number, loser_wins: number, challenger_winner: boolean}): React.ReactElement {
  const classes = useStyles();
  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item container xs={12}>
        <Typography variant='h4' align='center'>
          {props.challenger_winner ? props.winner_wins : props.loser_wins}
        </Typography>
        <ArrowBackIosIcon
          className={classes.icon}
          style={{paddingLeft: '8px'}}
          color={props.challenger_winner ? 'action' : 'disabled'}
        />
        <ArrowForwardIosIcon
          className={classes.icon}
          color={props.challenger_winner ? 'disabled' : 'action'}
        />
        <Typography variant='h4' align='center'>
          {props.challenger_winner ? props.loser_wins : props.winner_wins}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Score;