import { FETCH_HOMEPAGE, CHANGE_EDIT, EDIT_HOMEPAGE } from "./hpConstants";

const initialState = {};

export default function homepageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CHANGE_EDIT:
      let newState = [...state.homepage.filter((pst) => pst.id === payload)];
      newState[0].edit = !newState[0].edit;
      return {
        ...state,
        homepage: [...newState],
      };
    case EDIT_HOMEPAGE:
      console.log(payload);
      return {
        ...state,
        homepage: [
          ...state.homepage.filter((pst) => pst.id !== payload.id),
          payload,
        ],
      };
    case FETCH_HOMEPAGE:
      return {
        ...state,
        homepage: payload,
      };
    default:
      return state;
  }
}
