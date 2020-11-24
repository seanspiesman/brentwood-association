import { combineReducers } from "redux";
import homepageReducer from "../../components/Homepage/redux/hpReducers";
import steeringReducer from "../../components/SteeringCommittee/redux/SteeringReducer";
const rootReducer = combineReducers({
  //otherReducers
  homepage: homepageReducer,
  steering: steeringReducer,
});

export default rootReducer;
