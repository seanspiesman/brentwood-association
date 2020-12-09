import { CHANGE_NEWS_EDIT, FETCH_NEWSLETTER } from "./NewConstants";

export function listenToNewsletter(details) {
  return {
    type: FETCH_NEWSLETTER,
    payload: details,
  };
}

export function changeEdit(item) {
  return { type: CHANGE_NEWS_EDIT, payload: item };
}
