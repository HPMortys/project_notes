import { combineReducers } from "redux";

import auth from './auth'
import notes from './notes'

export const reducers = combineReducers({auth, notes})
