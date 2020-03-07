import React from "react";
import {Link} from "react-router-dom";
import {Card, CardHeader, CardMedia} from "@material-ui/core";
import {Season as _Season} from "../../types";
import {useStyles} from "../../theme";

export function Season(props: _Season) {
  const classes = useStyles();
  return (
    <Link to={`/seasons/${props.id}`} style={{color: 'black', textDecoration: 'none'}}>
      <Card>
        <CardHeader title={props.name} subheader={props.game.title}
                    titleTypographyProps={{align: 'left'}} subheaderTypographyProps={{align: 'left'}}/>
        <CardMedia>
          <div className={classes.sixteen_to_nine}>
            <img alt={props.name} src={props.banner} className={classes.aspect_item}/>
          </div>
        </CardMedia>
      </Card>
    </Link>
  );
}

export default Season;