const emailReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EMAIL_STATUS':
      return { email: action.payload.email };
    default:
      return state;
  }
};

export default emailReducer;
