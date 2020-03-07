import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {green, pink} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: green,
  },
});

export const useStyles = makeStyles({
  avatar: {
    height: '50px',
    width: '50px',
  },
  container_lg: {
    padding: theme.spacing(3),
  },
  container: {
    padding: theme.spacing(2),
  },
  container_sm: {
    padding: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  fill: {
    height: '100%',
    width: '100%',
  },
  icon: {
    height: '40px',
    width: '40px',
  },
  large_avatar: {
    height: '150px',
    width: '150px',
  },
  sixteen_to_nine: {
    height: 0,
    overflow: 'hidden',
    paddingTop: '56.25%',
    position: 'relative',
  },
  one_to_one: {
    height: 0,
    overflow: 'hidden',
    paddingTop: '100%',
    position: 'relative',
  },
  aspect_item: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  list: {
    width: 300,
  },
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});