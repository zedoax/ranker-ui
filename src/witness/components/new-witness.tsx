import {SnackbarMessage, SnackbarVariant, SnackbarVisibility, User} from "../../types";
import {Button, Grid, Hidden, MenuItem, TextField} from "@material-ui/core";
import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import {useStyles} from "../../theme";
import Snackbar from "../../components/snackbar";
import {post} from "../../utils/fetch";


export const NewWitness = (props: {users: User[]}) => {
  // Hooks and instance variables
  const classes = useStyles();

  // Witness form and snackbar state
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<SnackbarMessage>('');
  const [variant, setVariant] = useState<SnackbarVariant>('info');
  const [visibility, setVisibility] = useState<SnackbarVisibility>('hidden');

  // Form handlers
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);

  // Form submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {username};
    post(
      `${process.env.REACT_APP_RANKER_URI}/witnesses/new`,
      data,
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
      <Grid container alignItems='center' justify='center'>
        <Grid item xs={10} className={classes.container}>
          <TextField id="username" select required fullWidth label="User"
                     value={username} onChange={handleUsernameChange} variant="outlined">
            {props.users.map(user => (
              <MenuItem key={user.username} value={user.username}>{user.first_name} {user.last_name}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={2} container justify='center' alignContent='center' className={classes.container}>
          <Button type='submit' variant="contained" color="primary" size="large" startIcon={<AddIcon/>}
                  disabled={username === ''}>
            <Hidden smDown>Add</Hidden>
          </Button>
        </Grid>
      </Grid>
      {visibility === 'visible' && <Snackbar variant={variant} message={message}/>}
    </form>
  );
};

export default NewWitness;