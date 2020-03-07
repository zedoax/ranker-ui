import {useSelector} from "react-redux";
import React, {useState} from "react";
import {getUserToken} from "../store";

export const ProtectedComponent = (props: {children: any}) => {
  useSelector(state => state);
  const user = getUserToken();

  return user.username ? props.children : <div/>;
};

export const WitnessComponent = (props: {children: any}) => {
  // User state hooks
  useSelector(state => state);
  const user = getUserToken();

  // Witness authorization state
  const [witness, setWitness] = useState<boolean>(false);
  const [isLoadingWitness, setIsLoadingWitness] = useState<boolean>(true);

  //
  if (isLoadingWitness && user.username) {
    fetch(`${process.env.REACT_APP_RANKER_URI}/users/${user.username}/witness`)
      .then(data => data.json()).then(user => {
      setWitness(user.witness);
      setIsLoadingWitness(false);
    });
  }

  return witness ? props.children : <div/>;
};

export const AdminComponent = (props: {children: any}) => {
  // User state hooks
  useSelector(state => state);
  const user = getUserToken();

  // Admin authorization state
  const [admin, setAdmin] = useState<boolean>(false);
  const [isLoadingWitness, setIsLoadingWitness] = useState<boolean>(true);


  // Get witness authorization and update state
  if (isLoadingWitness && user.username) {
    fetch(`${process.env.REACT_APP_RANKER_URI}/users/${user.username}/admin`)
      .then(data => data.json()).then(user => {
      setAdmin(user.admin);
      setIsLoadingWitness(false);
    });
  }

  return admin ? props.children : <div/>;
};