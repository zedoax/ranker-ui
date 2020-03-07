import React from 'react';
import {processSilentRenew} from "redux-oidc";

const SilentRenew = () => {
  processSilentRenew();
  return <div/>;
};

export {SilentRenew};