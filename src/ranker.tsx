import {Routes} from "./routes";
import React from "react";
import {Container} from "@material-ui/core";
import Navigation from "./nav/navigation";
import {useStyles} from "./theme";


export const Ranker = () => {
  const classes = useStyles();
  return (
    <div>
      <Navigation/>
      <Container maxWidth='lg' className={classes.divider}>
        <Routes/>
      </Container>
    </div>
  )
};

export default Ranker;