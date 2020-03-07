import React from 'react';
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getUserToken} from "../store";

export const ReduxButton = () => {
  useSelector(state => state);
  const user = getUserToken();

  if (user.username) {
    return <Button color='inherit' href='/logout'>Logout</Button>;
  }

  return <Button color='inherit' href='/login'>Login</Button>;
};