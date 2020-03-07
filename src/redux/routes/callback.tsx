import React from "react";
import { CallbackComponent } from "redux-oidc";
import userManager from "../user-manager";
import { useHistory } from "react-router-dom";
import {post} from "../../utils/fetch";

const Callback = () => {
  const history = useHistory();

  const successCallback = (user: any) => {
    post(`${process.env.REACT_APP_RANKER_URI}/users/create`, {}, () => {}, () => {});
    history.push("/");
  };

  const errorCallback = (error: Error) => {
    history.push("/");
    console.error(error);
  };

  return (
    <CallbackComponent userManager={userManager} successCallback={successCallback} errorCallback={errorCallback}>
      <div>Login Successful... Redirecting</div>
    </CallbackComponent>
  );
};

export default Callback;