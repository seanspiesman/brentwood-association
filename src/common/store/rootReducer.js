import { combineReducers } from "redux";
import homepageReducer from "../../components/Homepage/redux/hpReducers";
import newsletterReducer from "../../components/NewsLetter/redux/NewsReducer";
import steeringReducer from "../../components/SteeringCommittee/redux/SteeringReducer";
import authReducer from "../auth/authReducer";
const rootReducer = combineReducers({
  //otherReducers
  homepage: homepageReducer,
  steering: steeringReducer,
  newsletter: newsletterReducer,
  auth: authReducer,
});

export default rootReducer;
