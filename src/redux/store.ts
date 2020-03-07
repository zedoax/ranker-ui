import {createStore, Store} from "redux";
import {createBrowserHistory} from 'history';
import createRootReducer from './reducer'
import {UserToken} from "../types";

export const history = createBrowserHistory();

// The store is used to access the state of the reducers
const configureStore = (initialState: any): Store => {
  return createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
  )
};

const store = configureStore({});

// Get the store state, and parse the authentication entries into a user token
export function getUserToken(state?: any) {
  let _state = state;
  if (!_state) {
    _state = store.getState();
  }
  return {
    username: _state?.auth?.user?.profile.preferred_username,
    access_token: _state?.auth?.user?.access_token,
    loading: _state?.auth?.isLoadingUser
  } as UserToken;
}

export default store;