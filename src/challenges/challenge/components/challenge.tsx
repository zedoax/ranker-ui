import React, {useState} from 'react';
import {Season, SnackbarMessage, SnackbarVariant, SnackbarVisibility, User} from "../../../types";
import {Button, Grid, Hidden, MenuItem, TextField} from "@material-ui/core";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Snackbar from "../../../components/snackbar";
import {post} from "../../../utils/fetch";
import {useStyles} from "../../../theme";

type ChallengeProps = {
  challenger: string|undefined,
  challengers: User[],
  seasons: Season[],
}

export function Challenge({challenger, challengers, seasons}: ChallengeProps): React.ReactElement {
  // Hooks and instance variables
  const classes = useStyles();

  // Form state
  const [challenged, setChallenged] = useState<string>('');
  const [season, setSeason] = useState<string>('');
  const [message, setMessage] = useState<SnackbarMessage>('');
  const [variant, setVariant] = useState<SnackbarVariant>('info');
  const [visibility, setVisibility] = useState<SnackbarVisibility>('hidden');

  // Form event handlers
  const handleChallengedChange = (event: React.ChangeEvent<HTMLInputElement>) => setChallenged(event.target.value);
  const handleSeasonChange = (event: React.ChangeEvent<HTMLInputElement>) => setSeason(event.target.value);

  // Submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    post(
      `${process.env.REACT_APP_RANKER_URI}/matches/new`,
      {challenger, challenged, season},
      (response: Response) => {
        setVariant(response.ok ? 'success' : 'error');
        setVisibility('hidden');
        return response.text()
      },
      (message: string) => {
        setMessage(message);
        setVisibility('visible');
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container className={classes.container}>
        <Grid item xs={5} className={classes.container}>
          <TextField
            label="Challenger"
            variant="outlined"
            value={challenged}
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
        <Grid item xs={5} className={classes.container}>
          <TextField
            label="Season"
            variant="outlined"
            value={season}
            onChange={handleSeasonChange}
            select
            required
            fullWidth
          >
            {seasons.map((season: Season) => (
              <MenuItem key={season.id} value={season.id}>
                {season.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item container justify='center' alignContent='center' xs={2} className={classes.container}>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            size="large"
            startIcon={<WhatshotIcon/>}
            disabled={challenged === '' || season === ''}
          >
            <Hidden smDown>
              Challenge
            </Hidden>
          </Button>
        </Grid>
      </Grid>
      { visibility === 'visible' && <Snackbar variant={variant} message={message}/> }
    </form>
  );
}

export default Challenge;