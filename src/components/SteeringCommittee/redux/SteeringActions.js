import { FETCH_MEETING, FETCH_MEETINGS } from "./SteeringConstants";

export function listenToSteering(posts) {
  return {
    type: FETCH_MEETINGS,
    payload: posts,
  };
}

export function listenToMeeting(posts) {
  return {
    type: FETCH_MEETING,
    payload: posts,
  };
}
