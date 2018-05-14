import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ onClick, isDone, text }) => (
  <li>
    {text}
    <input type="checkbox" onClick={onClick} value={isDone} />
  </li>
);

TodoItem.PropTypes = {
  onClick: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;