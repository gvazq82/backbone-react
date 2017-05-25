// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}
// add comment
export function addContact(postId, author, comment) {
  return {
    type: 'ADD_CONTACT',
    postId,
    author,
    comment
  };
}
// remove comment
export function removeContact(postId, i) {
  return {
    type: 'REMOVE_CONTACT',
    i,
    postId
  };
}
