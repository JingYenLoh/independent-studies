let nextId = 1;

export const addTodo = text => ({
  id: nextId++,
  type: "ADD_TODO",
  text
});

export const toggleTodo = id => ({
  id,
  type: "TOGGLE_TODO"
});
