import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
const reducers = combineReducers({
  allData: dataReducer,
  
});
export default reducers;
