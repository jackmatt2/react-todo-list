import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: ""
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleAddTodo() {
        this.props.onAddTodo({
            id: Math.floor(Math.random() * 100),
            name: this.state.name,
            description: this.state.description
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value,
            description: this.state.description
        })
    }

    handleDescriptionChange(e) {
        this.setState({
            name: this.state.name,
            description: e.target.value
        })
    }

    render() {
        return (
            <fieldset>

                <legend className="">Create New TODO</legend>

                <div className="form-group has-float-label">
                    <input className="form-control" type="text" value={this.state.name} onChange={this.handleNameChange} />
                    <label className="ffl-label">Name</label>
                </div>

                <div className="form-group has-float-label">
                    <textarea className="form-control" rows="5" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                    <label className="ffl-label">Description</label>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => { this.handleAddTodo(); this.props.close(); }}>Create</button>
                    <button className="btn btn-default float-right" onClick={this.props.close}>Close</button>
                </div>

            </fieldset>
        )
    }
}

CreateTodo.propTypes = {
    onAddTodo: PropTypes.func
};

export default CreateTodo;