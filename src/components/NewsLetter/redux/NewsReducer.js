import {
  CHANGE_NEWS_EDIT,
  EDIT_NEWSLETTER,
  FETCH_NEWSLETTER,
} from "./NewConstants";

const initialState = {};

export default function newsletterReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CHANGE_NEWS_EDIT:
      let newState = [...state.newsletter.filter((pst) => pst.id === payload)];
      newState[0].edit = !newState[0].edit;
      return {
        ...state,
        newsletter: [...newState],
      };
    case EDIT_NEWSLETTER:
      console.log(payload);
      return {
        ...state,
        newsletter: [
          ...state.newsletter.filter((pst) => pst.id !== payload.id),
          payload,
        ],
      };
    case FETCH_NEWSLETTER:
      return {
        ...state,
        newsletter: payload,
      };
    default:
      return state;
  }
}
