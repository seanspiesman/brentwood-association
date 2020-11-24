import {
  CHANGE_STEERING_EDIT,
  EDIT_STEERING,
  FETCH_STEERING,
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
    case FETCH_STEERING:
      return {
        ...state,
        steering: payload,
      };
    default:
      return state;
  }
}
