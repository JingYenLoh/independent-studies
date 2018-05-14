const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          id: action.id,
          text: action.text,
          isDone: false
        },
        ...state
      ];

    default:
      return state;
  }
};

export default todos;
