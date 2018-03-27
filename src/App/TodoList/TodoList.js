import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = ({todos, onDeleteTodo, onAddTodo}) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map(todo =>
                <li className="list-group-item list-group-item-action" key={todo.id}>
                    <TodoListItem todo={todo} onDeleteTodo={onDeleteTodo}/>
                </li>
            )}
        </ul>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array,
    onDeleteTodo: PropTypes.func
};

TodoList.defaultProps = {
    todos: []
};

export default TodoList;