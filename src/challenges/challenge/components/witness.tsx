import React, {useState} from 'react';
import {SnackbarMessage, SnackbarVariant, SnackbarVisibility, User} from "../../../types";
import {Button, Grid, Hidden, MenuItem, TextField} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Snackbar from "../../../components/snackbar";
import {getUserToken} from "../../../redux/store";
import {post} from "../../../utils/fetch";
import {useStyles} from "../../../theme";

type WitnessProps = {
  challengers: User[],
  winner_rounds: number[],
  loser_rounds: number[],
}

export function Witness({challengers, winner_rounds, loser_rounds}: WitnessProps): React.ReactElement {
  // Hooks and instance variables
  const classes = useStyles();
  const user = getUserToken();
  const witness = user.username;

  // Form state
  const [winner, setWinner] = useState<string>('');
  const [loser, setLoser] = useState<string>('');
  const [winner_wins, setWinnerWins] = useState<number|''>('');
  const [loser_wins, setLoserWins] = useState<number|''>('');
  const [message, setMessage] = useState<SnackbarMessage>('');
  const [variant, setVariant] = useState<SnackbarVariant>('info');
  const [visibility, setVisibility] = useState<SnackbarVisibility>('hidden');

  // Form event handlers
  const handleChallengerChange = (event: React.ChangeEvent<HTMLInputElement>) => setWinner(event.target.value);
  const handleChallengedChange = (event: React.ChangeEvent<HTMLInputElement>) => setLoser(event.target.value);
  const handleWinnerWinsChange = (event: React.ChangeEvent<{value:unknown}>) => setWinnerWins(event.target.value as number);
  const handleLoserWinsChange = (event: React.ChangeEvent<{value:unknown}>) => setLoserWins(event.target.value as number);

  // Submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({winner, loser, winner_wins, loser_wins, witness});
    post(
      `${process.env.REACT_APP_RANKER_URI}/matches/witness`,
      {winner, loser, winner_wins, loser_wins, witness},
      (response: Response) => {
        setVariant(response.ok ? 'success' : 'error');
        setVisibility('hidden');
        return response.text()
      },
      (message: string) => {
        setMessage(message);
        setVisibility('visible');
      }
    )
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6} md={3} className={classes.container}>
          <TextField
            label="Winner"
            value={winner}
            variant="outlined"
            onChange={handleChallengerChange}
            select
            required
            fullWidth
          >
            {challengers.map((challenger: User) => (
              <MenuItem key={challenger.username} value={challenger.username}>
                {challenger.first_name} {challenger.last_name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} md={3} className={classes.container}>
          <TextField
            label="Loser"
            value={loser}
            variant="outlined"
            onChange={handleChallengedChange}
            select
            required
            fullWidth
          >
            {challengers.map((challenger: User) => (
              <MenuItem key={challenger.username} value={challenger.username}>
                {challenger.first_name} {challenger.last_name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={5} md={2} className={classes.container}>
          <TextField
            label="Winner Wins"
            value={winner_wins}
            variant="outlined"
            onChange={handleWinnerWinsChange}
            select
            required
            fullWidth
          >
            {winner_rounds.map((rounds: number) => (
              <MenuItem key={rounds} value={rounds}>{rounds}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={5} md={2} className={classes.container}>
          <TextField
            label="Loser Wins"
            value={loser_wins}
            variant="outlined"
            onChange={handleLoserWinsChange}
            select
            required
            fullWidth
          >
            {loser_rounds.map((rounds: number) => (
              <MenuItem key={rounds} value={rounds}>{rounds}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item container justify='center' alignContent='center' xs={2}>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ArrowUpwardIcon/>}
            disabled={winner === '' || loser === '' || winner_wins < 0 || loser_wins < 0}
          >
            <Hidden smDown>
              Witness
            </Hidden>
          </Button>
        </Grid>
      </Grid>
      { visibility === 'visible' && <Snackbar variant={variant} message={message}/> }
    </form>
  );
}

export default Witness;