import {Game as GameType} from "../../types";
import React, {useState} from "react";
import {useStyles} from "../../theme";
import {Avatar, Card, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom";
import clsx from 'clsx';

export function GameCard(props: GameType): React.ReactElement {
  // Hooks and instance variables
  const classes = useStyles();

  // Card state
  const [expanded, setExpanded] = useState<boolean>(false);

  // Toggle method
  const handleExpandedChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.container}>
      <CardHeader
        title={
          <Link to={`/games/${props.id}`} style={{color: 'black', textDecoration: 'none'}}>
            {props.title}
          </Link>
        }
        titleTypographyProps={{variant: 'h4', align: 'left'}}
        action={
          <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                      onClick={handleExpandedChange} aria-expanded={expanded}>
            <ExpandMoreIcon/>
          </IconButton>
        }/>
      <CardMedia>
        <div className={classes.one_to_one}>
          <Link to={`/games/${props.id}`}>
            <Avatar className={classes.aspect_item} alt={props.title} src={props.img}/>
          </Link>
        </div>
      </CardMedia>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography align='left'><b>Description: </b>{props.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}