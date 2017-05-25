function postContacts(state = [], action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      //return the new state with new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_CONTACT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

function contacts(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overrite this post with a new one
      [action.postId]: postContacts(state[action.postId], action)
    }
  }
  return state;
}

export default contacts;