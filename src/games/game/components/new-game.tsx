import React, {useState} from 'react';
import {useStyles} from "../../../theme";
import {SnackbarMessage, SnackbarVariant, SnackbarVisibility} from "../../../types";
import {Button, Grid, Hidden, TextField} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import Snackbar from "../../../components/snackbar";
import {post} from "../../../utils/fetch";

export const NewGame = () => {
  // Hooks and instance variables
  const classes = useStyles();

  // Form state
  const [title, setTitle] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [message, setMessage] = useState<SnackbarMessage>('');
  const [variant, setVariant] = useState<SnackbarVariant>('info');
  const [visibility, setVisibility] = useState<SnackbarVisibility>('hidden');

  // Form event handlers
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  const handleImgChange = (event: React.ChangeEvent<HTMLInputElement>) => setImg(event.target.value);
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value);

  // Form submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {title, img, description};
    post(
      `${process.env.REACT_APP_RANKER_URI}/games/new`,
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
      <Grid container>
        <Grid item xs={6} md={3} className={classes.container}>
          <TextField
            label="Title"
            value={title}
            variant="outlined"
            onChange={handleTitleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6} md={3} className={classes.container}>
          <TextField
            label="Logo Image"
            value={img}
            variant="outlined"
            onChange={handleImgChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={10} md={4} className={classes.container}>
          <TextField
            label="Description"
            value={description}
            variant="outlined"
            onChange={handleDescriptionChange}
            multiline
            required
            fullWidth
          />
        </Grid>
        <Grid item container justify='center' alignContent='center' xs={2}>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            size="large"
            startIcon={<CreateIcon/>}
            disabled={title === '' || img === '' || description === ''}
          >
            <Hidden smDown>
              Create
            </Hidden>
          </Button>
        </Grid>
      </Grid>
      {visibility === 'visible' && <Snackbar variant={variant} message={message}/>}
    </form>
  );
};

export default NewGame;