import {combineReducers} from 'redux'
import {reducer} from 'redux-oidc'
import {connectRouter} from 'connected-react-router'

// Creates the fields available when using redux-oidc state objects
export default (history: any) => combineReducers({
  router: connectRouter(history),
  auth: reducer,
})