export default function squashReducer(state = [], action) {
  switch (action.type) {
    case "SERACH_SQUASH":
      return [...state, { ...action.squashRequest }];

    default:
      return state;
  }
}
