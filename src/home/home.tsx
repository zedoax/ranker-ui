import React from 'react';
import {getUserToken} from "../redux/store";
import {AllSeasons, UserSeasons} from "../seasons";

export const Home = () => {
  const user = getUserToken();
  return (!user || !user.username) ? <AllSeasons/> : <UserSeasons username={user.username}/>;
};