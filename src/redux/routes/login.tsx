import React from 'react';
import userManager from "../user-manager";

export const Login = () => {
  userManager.signinRedirect();
  return <div/>;
};

export default Login;