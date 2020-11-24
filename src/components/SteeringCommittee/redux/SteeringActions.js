import { CHANGE_STEERING_EDIT, FETCH_STEERING } from "./SteeringConstants";

export function listenToSteering(posts) {
  return {
    type: FETCH_STEERING,
    payload: posts,
  };
}

export function changeEdit(postId) {
  return { type: CHANGE_STEERING_EDIT, payload: postId };
}
