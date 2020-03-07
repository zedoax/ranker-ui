import {Provider} from "react-redux";
import store, {history} from "../store";
import {loadUser, OidcProvider} from "redux-oidc";
import userManager from "../user-manager";
import React from "react";
import {ConnectedRouter} from "connected-react-router";
import Ranker from "../../ranker";

loadUser(store, userManager);

const Handler = () => {
  return (
    <Provider store={store}>
      <OidcProvider userManager={userManager} store={store}>
        <ConnectedRouter history={history}>
          <Ranker/>
        </ConnectedRouter>
      </OidcProvider>
    </Provider>
  );
};

export default Handler;