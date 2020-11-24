import { CHANGE_EDIT, FETCH_HOMEPAGE } from "./hpConstants";

export function listenToHomepage(details) {
  return {
    type: FETCH_HOMEPAGE,
    payload: details,
  };
}

export function changeEdit(postId) {
  return { type: CHANGE_EDIT, payload: postId };
}
