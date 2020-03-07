import React, {useState} from 'react';
import {useStyles} from "../../../theme";
import {Game, SnackbarMessage, SnackbarVariant, SnackbarVisibility} from "../../../types";
import {Button, Grid, Hidden, MenuItem, TextField} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import Snackbar from "../../../components/snackbar";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {post} from "../../../utils/fetch";

const NewSeason = (props: {games: Game[]}) => {
  const classes = useStyles();
  const [name, setName] = useState<string>('');
  const [banner, setBanner] = useState<string>('');
  const [game, setGame] = useState<number|''>('');
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);
  const [message, setMessage] = useState<SnackbarMessage>('');
  const [variant, setVariant] = useState<SnackbarVariant>('info');
  const [visibility, setVisibility] = useState<SnackbarVisibility>('hidden');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => setBanner(event.target.value);
  const handleGameChange = (event: React.ChangeEvent<{value:unknown}>) => setGame(event.target.value as number);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {name, banner, game, start, end};
    post(
      `${process.env.REACT_APP_RANKER_URI}/seasons/new`,
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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container alignItems='center'>
          <Grid item xs={6} className={classes.container}>
            <TextField id="name" required fullWidth label="Name"
                       value={name} onChange={handleNameChange} variant="outlined"/>
          </Grid>
          <Grid item xs={6} className={classes.container}>
            <TextField id="banner" required fullWidth label="Banner Image"
                       value={banner} onChange={handleBannerChange} variant="outlined"/>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.container}>
            <TextField id="game" select required fullWidth label="Game"
                       value={game} onChange={handleGameChange} variant="outlined">
              {props.games.map(game => (
                <MenuItem key={game.id} value={game.id}>
                  {game.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={5} sm={3} className={classes.container}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant='outlined'
              format="MM/dd/yyyy"
              margin="normal"
              id="start"
              label="Start"
              value={start}
              onChange={date => setStart(date)}
              autoOk/>
          </Grid>
          <Grid item xs={5} sm={3} className={classes.container}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant='outlined'
              format="MM/dd/yyyy"
              margin="normal"
              id="end"
              label="End"
              value={end}
              onChange={date => setEnd(date)}
              autoOk/>
          </Grid>
          <Grid item container justify='center' alignContent='center' xs={2}>
            <Button type='submit' variant="contained" color="primary" size="large" startIcon={<CreateIcon/>}
                    disabled={name === '' || banner === '' || game < 1 || !start || !end}>
              <Hidden smDown>Create</Hidden>
            </Button>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      {visibility === 'visible' && <Snackbar variant={variant} message={message}/>}
    </form>
  );
};

export default NewSeason;