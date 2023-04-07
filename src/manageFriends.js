const initialState = { friends: [] };

export function manageFriends(state = initialState, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload]  };
    case "friends/remove":

      return { friends: state.friends.splice(action.payload)};  
    default:
      return state;
  }

}
