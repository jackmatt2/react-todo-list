import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render() {
        <div className="card">
            <h3 className="">{props.todo.name}</h3>
            <p>{props.todo.description}</p>
        </div>
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object
};

export default TodoItem;