import React, {ReactElement, useState} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {getUserToken} from "../store";
import {useSelector} from "react-redux";
import {get} from "../../utils/fetch";

interface RouteProps {
  component: ReactElement,
  path: string,
  exact?: boolean
}

const ProtectedRoute = ({ component, ...args }: RouteProps) => {
  // User state hooks
  const state = useSelector(state => state);
  const user = getUserToken(state);

  if (user.loading) {
    return <div>Loading...</div>;
  }

  return <Route {...args} render={() => user ? <div>{component}</div> : <Redirect push to="/login"/>}/>;
};

const WitnessRoute = ({ component, ...args }: RouteProps) => {
  // User state hooks
  const state = useSelector(state => state);
  const user = getUserToken(state);

  // Witness authorization state
  const [witness, setWitness] = useState<boolean>(false);
  const [isLoadingWitness, setIsLoadingWitness] = useState<boolean>(true);

  if (user.loading) {
    return <span>You are not authorized to access this content</span>;
  }

  // Get witness authorization and update state
  if (isLoadingWitness && user.username) {
    get(`${process.env.REACT_APP_RANKER_URI}/users/${user.username}/witness`,
      (data: Response) => data.json(),
      (user: {witness: boolean}) => {
        setWitness(user.witness);
        setIsLoadingWitness(false);
    });
    return <div/>;
  }

  if (!witness) {
    return <span>You are not authorized to access this content</span>;
  }

  return <Route {...args} render={() => user ? <div>{component}</div> : <Redirect push to="/login"/>}/>;
};

const AdminRoute = ({ component, ...args }: RouteProps) => {
  // User state hooks
  const state = useSelector(state => state);
  const user = getUserToken(state);

  // Admin authorization state
  const [admin, setAdmin] = useState<boolean>(false);
  const [isLoadingWitness, setIsLoadingWitness] = useState<boolean>(true);

  if (user.loading) {
    return <span>You are not authorized to access this content</span>;
  }

  // Get admin authorization and update state
  if (isLoadingWitness && user.username) {
    get(
      `${process.env.REACT_APP_RANKER_URI}/users/${user.username}/admin`,
      (response: Response) => response.json(),
      (user: {admin: boolean}) => {
      setAdmin(user.admin);
      setIsLoadingWitness(false);
    });
    return <div/>;
  }

  if (!admin) {
    return <span>You are not authorized to access this content</span>;
  }

  return <Route {...args} render={() => user ? <div>{component}</div> : <Redirect push to="/login"/>}/>;
};

export {ProtectedRoute, WitnessRoute, AdminRoute};