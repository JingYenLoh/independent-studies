import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoItems from "../components/TodoItems";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
