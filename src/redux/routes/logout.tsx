import userManager from "../user-manager";
import React from "react";

export const Logout = () => {
  userManager.signoutRedirect();
  return <div/>;
};

export default Logout;