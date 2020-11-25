import {
  CHANGE_STEERING_EDIT,
  EDIT_STEERING,
  FETCH_MEETING,
  FETCH_MEETINGS,
} from "./SteeringConstants";

const initialState = {};

export default function steeringReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CHANGE_STEERING_EDIT:
      let newState = [...state.steering.filter((pst) => pst.id === payload)];
      newState[0].edit = !newState[0].edit;
      return {
        ...state,
        steering: [...newState],
      };
    case EDIT_STEERING:
      console.log(payload);
      return {
        ...state,
        steering: [
          ...state.steering.filter((pst) => pst.id !== payload.id),
          payload,
        ],
      };
    case FETCH_MEETINGS:
      return {
        ...state,
        steering: payload,
      };
    case FETCH_MEETING:
      return {
        steering: payload,
      };
    default:
      return state;
  }
}
