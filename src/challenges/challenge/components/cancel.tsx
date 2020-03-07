import React, {useState} from 'react';
import {Button, Grid, Hidden, MenuItem, TextField} from "@material-ui/core";
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import {SnackbarMessage, SnackbarVariant, SnackbarVisibility, User} from "../../../types";
import {useStyles} from "../../../theme";
import Snackbar from "../../../components/snackbar";
import {post} from "../../../utils/fetch";

type CancelProps = {
  challenged: string|undefined,
  challengers: User[]
}

export function Cancel({challenged, challengers}: CancelProps): React.ReactElement {
  // Hooks and instance variables
  const classes = useStyles();

  // Form state
  const [challenger, setChallenger] = useState<string>('');
  const [message, setMessage] = useState<SnackbarMessage>('');
  const [variant, setVariant] = useState<SnackbarVariant>('info');
  const [visibility, setVisibility] = useState<SnackbarVisibility>('hidden');

  // Form event handlers
  const handleChallengerChange = (event: React.ChangeEvent<HTMLInputElement>) => setChallenger(event.target.value);

  // Submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    post(
      `${process.env.REACT_APP_RANKER_URI}/matches/cancel`,
      {challenger, challenged},
      (response: Response) => {
        setVariant(response.ok ? 'success' : 'error');
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
        <Grid item xs={10} className={classes.container}>
          <TextField
            id="challenged"
            name='challenged'
            label="Challenger"
            value={challenger}
            onChange={handleChallengerChange}
            variant="outlined"
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
        <Grid item container justify='center' alignContent='center' xs={2} className={classes.container}>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            size="large"
            startIcon={<CancelRoundedIcon/>}
            disabled={challenger === ''}
          >
            <Hidden smDown>Cancel</Hidden>
          </Button>
        </Grid>
      </Grid>
      {visibility === 'visible' && <Snackbar variant={variant} message={message}/>}
    </form>
  );
}

export default Cancel;