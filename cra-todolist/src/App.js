import React, { Fragment } from "react";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import AddTodoForm from "./containers/AddTodoForm";
import TodoList from "./containers/TodoList";
import "./App.css";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Fragment>
      <AddTodoForm />
      <TodoList />
    </Fragment>
  </Provider>
);

export default App;
