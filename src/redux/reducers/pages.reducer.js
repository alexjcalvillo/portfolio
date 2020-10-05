const pagesReducer = (state = 'home', action) => {
  switch (action.type) {
    case 'SET_HOME':
      return action.payload;
    case 'SET_WORK':
      return action.payload;
    case 'SET_ABOUT':
      return action.payload;
    default:
      return state;
  }
};

export default pagesReducer;
