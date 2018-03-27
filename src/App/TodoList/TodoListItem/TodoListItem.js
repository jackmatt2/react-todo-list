import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.props.onDeleteTodo(this.props.todo.id);
    }

    render() {
        return (
            <span>
                <span className="uk-text-success">{this.props.todo.name}</span><button className="btn btn-danger float-right" onClick={this.handleDelete}>X</button>
            </span>
        )
    }
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onDeleteTodo: PropTypes.func
};

export default TodoListItem;